/* Étude IA agentique Suisse : rendu du site. Données : assets/data.js (généré depuis
   data/acteurs.csv par scripts/gen_site_data.py ; inline car fetch() est bloqué en file://).
   Graphiques : SVG générés à la main, palette validée, aucune dépendance externe. */
'use strict';
const A = window.ACTEURS, AN = window.ANALYSE;
const NIVEAUX = ['chatbot', 'RAG', 'workflow automatisé', 'agents autonomes multi-étapes', 'infrastructure'];
const SEGMENTS = ['produit', 'service', 'conseil'];
const SEG_COLOR = { produit: 'var(--series-1)', service: 'var(--series-2)', conseil: 'var(--series-3)' };
const CIBLE_COLOR = { 'B2B': 'var(--series-1)', 'B2C': 'var(--series-2)', 'B2B+B2C': 'var(--series-3)' };
const NOMS_CANTONS = { ZH: 'Zurich', VD: 'Vaud', GE: 'Genève', TI: 'Tessin', VS: 'Valais', BE: 'Berne', AG: 'Argovie', LU: 'Lucerne', SG: 'Saint-Gall', NE: 'Neuchâtel', BL: 'Bâle-Campagne', TG: 'Thurgovie', ZG: 'Zoug', nd: 'Non déterminé' };

/* ---------- utilitaires ---------- */
const $ = s => document.querySelector(s);
function el(tag, attrs = {}, children = []) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'text') e.textContent = v;
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for (const c of [].concat(children)) e.append(c);
  return e;
}
function svg(tag, attrs = {}, children = []) {
  const e = document.createElementNS('http://www.w3.org/2000/svg', tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'text') e.textContent = v;
    else e.setAttribute(k, v);
  }
  for (const c of [].concat(children)) e.append(c);
  return e;
}

/* Infobulle : contenu injecté via textContent uniquement (données non fiables). */
const tip = $('#tooltip');
function tipShow(evt, title, rows) {
  tip.textContent = '';
  if (title) tip.append(el('div', { class: 't-title', text: title }));
  for (const r of rows) {
    const line = el('div', { class: 't-row' });
    if (r.color) line.append(el('span', { class: 't-key', style: `background:${r.color}` }));
    line.append(el('span', { class: 't-val', text: r.value }));
    if (r.label) line.append(el('span', { text: r.label }));
    tip.append(line);
  }
  tip.style.display = 'block';
  tipMove(evt);
}
function tipMove(evt) {
  const pad = 14, w = tip.offsetWidth, h = tip.offsetHeight;
  let x = evt.clientX + pad, y = evt.clientY + pad;
  if (x + w > innerWidth - 8) x = evt.clientX - w - pad;
  if (y + h > innerHeight - 8) y = evt.clientY - h - pad;
  tip.style.left = x + 'px'; tip.style.top = y + 'px';
}
function tipHide() { tip.style.display = 'none'; }
function hover(target, title, rows) {
  target.addEventListener('pointerenter', e => tipShow(e, title, rows));
  target.addEventListener('pointermove', tipMove);
  target.addEventListener('pointerleave', tipHide);
  target.addEventListener('focus', e => { const r = target.getBoundingClientRect(); tipShow({ clientX: r.right, clientY: r.top }, title, rows); });
  target.addEventListener('blur', tipHide);
}

/* Vue tableau jumelle de chaque graphique (accessibilité : les valeurs ne dépendent
   jamais de la couleur ni du survol). */
function tableView(fig, caption, headers, rows) {
  const t = el('table');
  const trh = el('tr');
  headers.forEach((h, i) => trh.append(el('th', { scope: 'col', class: i > 0 ? 'num' : '', text: h })));
  t.append(el('caption', { text: caption }), el('thead', {}, trh));
  const tb = el('tbody');
  for (const r of rows) {
    const tr = el('tr');
    r.forEach((c, i) => tr.append(el(i === 0 ? 'th' : 'td', i === 0 ? { scope: 'row', text: c } : { class: 'num', text: c })));
    tb.append(tr);
  }
  t.append(tb);
  fig.append(el('details', { class: 'tableview' }, [
    el('summary', { text: 'Vue tableau (données du graphique)' }),
    el('div', { class: 'table-wrap' }, t)]));
}
function legend(fig, items) {
  const l = el('div', { class: 'legend' });
  for (const it of items) l.append(el('span', { class: 'key' }, [
    el('span', { class: it.line ? 'linekey' : 'swatch', style: `background:${it.color}` }),
    el('span', { text: it.label })]));
  fig.prepend(l);
}
const fmt = n => n.toLocaleString('fr-CH');

/* Barres horizontales génériques. items: {label, value, color, tip} */
function barChart(fig, items, opts = {}) {
  const W = opts.width || 640, barH = 20, gap = 10, left = opts.left || 150, right = opts.right || 60;
  const H = items.length * (barH + gap) + 24;
  const max = Math.max(...items.map(d => d.value), 1);
  const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': opts.aria || '' });
  items.forEach((d, i) => {
    const y = 8 + i * (barH + gap);
    const w = Math.max((d.value / max) * (W - left - right), d.value > 0 ? 2 : 0);
    const r = Math.min(4, w / 2);
    // extrémité arrondie 4px côté donnée, carrée à la base
    const bar = svg('path', {
      d: `M${left},${y} h${Math.max(w - r, 0)} a${r},${r} 0 0 1 ${r},${r} v${barH - 2 * r} a${r},${r} 0 0 1 -${r},${r} h-${Math.max(w - r, 0)} z`,
      fill: d.color || 'var(--series-1)', tabindex: '0'
    });
    hover(bar, d.tipTitle || d.label, d.tip || [{ value: fmt(d.value), label: opts.unite || '', color: d.color }]);
    s.append(
      svg('text', { x: left - 8, y: y + barH / 2 + 4, 'text-anchor': 'end', 'font-size': '12', fill: 'var(--text-secondary)', text: d.label }),
      bar,
      svg('text', { x: left + w + 6, y: y + barH / 2 + 4, 'font-size': '12', fill: 'var(--text-primary)', 'font-weight': '600', text: d.valueLabel || fmt(d.value) }));
  });
  s.append(svg('line', { x1: left, y1: 4, x2: left, y2: H - 12, stroke: 'var(--baseline)', 'stroke-width': '1' }));
  fig.append(s);
  return s;
}

/* Barres empilées horizontales. rows: {label, parts: {clé: valeur}}, series: [{key,label,color}] */
function stackedChart(fig, rows, series, opts = {}) {
  const W = 680, barH = 18, gap = 8, left = opts.left || 190, right = 40;
  const H = rows.length * (barH + gap) + 24;
  const max = Math.max(...rows.map(r => series.reduce((t, s2) => t + (r.parts[s2.key] || 0), 0)), 1);
  const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': opts.aria || '' });
  rows.forEach((r, i) => {
    const y = 8 + i * (barH + gap);
    let x = left;
    const total = series.reduce((t, s2) => t + (r.parts[s2.key] || 0), 0);
    for (const s2 of series) {
      const v = r.parts[s2.key] || 0;
      if (!v) continue;
      const w = (v / max) * (W - left - right);
      // écart de 2px en couleur de surface entre segments (jamais de bordure)
      const seg = svg('rect', { x: x, y, width: Math.max(w - 2, 1), height: barH, rx: 2, fill: s2.color, tabindex: '0' });
      hover(seg, r.label, series.map(s3 => ({ value: String(r.parts[s3.key] || 0), label: s3.label, color: s3.color })));
      s.append(seg);
      x += w;
    }
    s.append(
      svg('text', { x: left - 8, y: y + barH / 2 + 4, 'text-anchor': 'end', 'font-size': '11.5', fill: 'var(--text-secondary)', text: r.label }),
      svg('text', { x: x + 5, y: y + barH / 2 + 4, 'font-size': '11.5', 'font-weight': '600', fill: 'var(--text-primary)', text: String(total) }));
  });
  s.append(svg('line', { x1: left, y1: 4, x2: left, y2: H - 12, stroke: 'var(--baseline)', 'stroke-width': '1' }));
  legend(fig, series.map(s2 => ({ label: s2.label, color: s2.color })));
  fig.append(s);
}

/* Donut : ≤ 3 segments, écart de surface entre parts, étiquettes directes. */
function donutChart(fig, items, opts = {}) {
  const W = 360, H = 240, cx = 120, cy = 120, R = 88, r0 = 52;
  const total = items.reduce((t, d) => t + d.value, 0);
  const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': opts.aria || '' });
  let a0 = -Math.PI / 2;
  for (const d of items) {
    const a1 = a0 + (d.value / total) * 2 * Math.PI;
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    const p = (a, R2) => `${cx + R2 * Math.cos(a)},${cy + R2 * Math.sin(a)}`;
    const path = svg('path', {
      d: `M${p(a0, R)} A${R},${R} 0 ${large} 1 ${p(a1, R)} L${p(a1, r0)} A${r0},${r0} 0 ${large} 0 ${p(a0, r0)} z`,
      fill: d.color, stroke: 'var(--surface-1)', 'stroke-width': '2', tabindex: '0'
    });
    hover(path, d.label, [{ value: `${d.value} acteurs (${Math.round(100 * d.value / total)} %)`, color: d.color }]);
    const am = (a0 + a1) / 2, lx = cx + (R + 18) * Math.cos(am), ly = cy + (R + 18) * Math.sin(am);
    s.append(path, svg('text', { x: lx, y: ly + 4, 'text-anchor': lx < cx ? 'end' : 'start', 'font-size': '12', fill: 'var(--text-primary)', 'font-weight': '600', text: `${d.value}` }));
    a0 = a1;
  }
  s.append(svg('text', { x: cx, y: cy - 2, 'text-anchor': 'middle', 'font-size': '22', 'font-weight': '600', fill: 'var(--text-primary)', text: String(total) }),
    svg('text', { x: cx, y: cy + 16, 'text-anchor': 'middle', 'font-size': '11', fill: 'var(--text-secondary)', text: 'acteurs' }));
  legend(fig, items.map(d => ({ label: `${d.label} (${Math.round(100 * d.value / total)} %)`, color: d.color })));
  fig.append(s);
}

/* ---------- 1. Chiffres clés ---------- */
(function kpis() {
  const k = AN.kpis;
  const tiles = [
    { label: 'Acteurs documentés', value: String(k.nb_acteurs), detail: 'après déduplication ; ~70 autres repérés' },
    { label: 'Cantons couverts', value: `${k.nb_cantons}/26`, detail: '12 cantons sans acteur recensé' },
    { label: 'Acteurs 100 % B2B', value: k.part_b2b_pct + ' %', detail: `${k.nb_b2c} acteurs servent le B2C` },
    { label: 'Financement documenté', value: '≈ ' + fmt(k.financement_cumule_musd) + ' M', detail: 'USD, levées publiées 2024-2026' },
    { label: 'Vrais agents autonomes', value: String(k.nb_agents_autonomes), detail: 'niveau maximal démontré, grille stricte' },
    { label: 'Acteurs à prix publics', value: String(k.nb_prix_publics), detail: 'sur 84 : opacité tarifaire dominante' },
  ];
  for (const t of tiles) $('#kpis').append(el('div', { class: 'kpi' }, [
    el('div', { class: 'label', text: t.label }),
    el('div', { class: 'value', text: t.value }),
    el('div', { class: 'detail', text: t.detail })]));
})();

/* ---------- 2. TAM / SAM / SOM (rampe ordinale bleue, TAM le plus foncé) ---------- */
(function tamSamSom() {
  const fig = $('#chart-tam');
  const ramp = ['var(--seq-550)', 'var(--seq-400)', 'var(--seq-250)'];
  const items = AN.tam_sam_som.map((d, i) => {
    const mid = (d.bas + d.haut) / 2;
    return {
      label: d.niveau, value: mid, color: ramp[i],
      valueLabel: `${d.bas} à ${d.haut} ${d.unite}`,
      tipTitle: `${d.niveau} : ${d.libelle}`,
      tip: [{ value: `${d.bas} à ${d.haut} ${d.unite}`, color: ramp[i] }, { value: '', label: d.hypothese }]
    };
  });
  barChart(fig, items, { left: 60, width: 680, right: 235, aria: 'TAM, SAM et SOM du marché suisse de l\'IA agentique' });
  $('#lecture-tam').textContent = 'Lecture : sur un marché total estimé entre 700 M et 1 md CHF/an à horizon 2028, ' +
    'un entrant romand ciblant PME et fiduciaires adresse 40 à 80 M CHF/an et peut viser 150 000 à 600 000 CHF ' +
    'de revenu annuel à 24 mois. Les largeurs sont à l\'échelle : elles montrent honnêtement l\'écart entre le marché et la part captable.';
  tableView(fig, 'TAM, SAM, SOM : bornes basses et hautes, statut et hypothèses (03_analyse_marche.md).',
    ['Niveau', 'Borne basse', 'Borne haute', 'Unité', 'Statut'],
    AN.tam_sam_som.map(d => [d.niveau + ' : ' + d.libelle, String(d.bas), String(d.haut), d.unite, d.statut]));
})();

/* ---------- 3. Dynamique : créations et levées ---------- */
(function dynamique() {
  const f1 = $('#chart-creations');
  const ans = Object.entries(AN.creations_par_annee);
  barChart(f1, ans.map(([a, n]) => ({ label: a, value: n, color: 'var(--series-1)' })),
    { left: 52, width: 420, aria: 'Créations d\'entreprises par année' });
  f1.append(el('figcaption', { class: 'note', text: `Créations par année (${AN.kpis.annee_creation_connue} dates connues sur 84 ; biais récent, voir note).` }));
  tableView(f1, 'Créations d\'entreprises par année (dates publiées uniquement).',
    ['Année', 'Créations'], ans.map(([a, n]) => [a, String(n)]));

  const f2 = $('#chart-levees');
  const lv = Object.entries(AN.levees_par_annee);
  barChart(f2, lv.map(([a, m]) => ({ label: a, value: m, color: 'var(--series-2)', valueLabel: fmt(m) + ' M', tipTitle: a, tip: [{ value: fmt(m) + ' M USD', label: 'montants publiés', color: 'var(--series-2)' }] })),
    { left: 52, width: 420, aria: 'Levées de fonds par année' });
  f2.append(el('figcaption', { class: 'note', text: 'Levées publiées par année (M USD ; 2026 partiel, montants non divulgués exclus).' }));
  tableView(f2, 'Levées de fonds documentées (recherche/06, montants publiés, fiabilité indiquée).',
    ['Société', 'Année', 'Montant (M)', 'Tour', 'Fiabilité'],
    AN.levees.map(l => [l.societe, String(l.annee), l.montant ? fmt(l.montant) + ' ' + l.devise : 'non divulgué', l.tour, l.fiabilite]));
  $('#lecture-dynamique').textContent = 'Lecture : la vague de créations post-2020 est sous-représentée (dates rarement publiées par les agences), ' +
    'mais les levées documentées triplent presque entre 2024 (40,5 M) et 2025 (184,7 M), et 2026 est déjà à 148,7 M à mi-année : le financement accélère.';
})();

/* ---------- 4. Cartographie ---------- */
(function cantons() {
  const fig = $('#chart-cantons');
  barChart(fig, AN.cantons.map(c => ({
    label: NOMS_CANTONS[c.canton] || c.canton, value: c.n,
    color: c.canton === 'nd' ? 'var(--de-emphasis)' : 'var(--series-1)',
    tipTitle: NOMS_CANTONS[c.canton] || c.canton,
    tip: [{ value: `${c.n} acteurs (${Math.round(100 * c.n / AN.kpis.nb_acteurs)} %)`, color: 'var(--series-1)' }]
  })), { left: 118, aria: 'Nombre d\'acteurs par canton' });
  tableView(fig, 'Acteurs par canton du siège suisse principal.', ['Canton', 'Acteurs'],
    AN.cantons.map(c => [NOMS_CANTONS[c.canton] || c.canton, String(c.n)]));
})();

(function cibles() {
  const fig = $('#chart-cibles');
  donutChart(fig, ['B2B', 'B2C', 'B2B+B2C'].map(c => ({ label: c, value: AN.cibles[c] || 0, color: CIBLE_COLOR[c] })),
    { aria: 'Répartition des acteurs entre B2B, B2C et mixte' });
  tableView(fig, 'Répartition par cible de clientèle.', ['Cible', 'Acteurs'],
    ['B2B', 'B2C', 'B2B+B2C'].map(c => [c, String(AN.cibles[c] || 0)]));
})();

(function cantonSegment() {
  const fig = $('#chart-canton-segment');
  const series = SEGMENTS.map(sg => ({ key: sg, label: sg, color: SEG_COLOR[sg] }));
  const rows = AN.cantons.map(c => {
    const parts = {};
    for (const a of A) if (a.canton === c.canton) parts[a.segment] = (parts[a.segment] || 0) + 1;
    return { label: NOMS_CANTONS[c.canton] || c.canton, parts };
  });
  stackedChart(fig, rows, series, { left: 118, aria: 'Segments par canton' });
  tableView(fig, 'Segments (produit, service, conseil) par canton.',
    ['Canton', 'Produit', 'Service', 'Conseil'],
    rows.map(r => [r.label, String(r.parts.produit || 0), String(r.parts.service || 0), String(r.parts.conseil || 0)]));
})();

/* ---------- 5. Comparatifs ---------- */
(function maturite() {
  const fig = $('#chart-maturite');
  // niveaux ordonnés : rampe ordinale bleue ; infrastructure hors échelle en gris
  const ramp = { 'chatbot': 'var(--seq-250)', 'RAG': 'var(--seq-350)', 'workflow automatisé': 'var(--seq-450)', 'agents autonomes multi-étapes': 'var(--seq-600)', 'infrastructure': 'var(--de-emphasis)' };
  barChart(fig, NIVEAUX.map(n => ({
    label: n === 'agents autonomes multi-étapes' ? 'agents autonomes' : n,
    value: AN.maturite[n], color: ramp[n],
    valueLabel: `${AN.maturite[n]} (${Math.round(100 * AN.maturite[n] / AN.kpis.nb_acteurs)} %)`,
    tipTitle: n, tip: [{ value: `${AN.maturite[n]} acteurs`, color: ramp[n] }]
  })), { left: 150, aria: 'Répartition des acteurs par degré d\'agenticité' });
  tableView(fig, 'Degré d\'agenticité : niveau maximal démontré de façon crédible (doute = niveau inférieur).',
    ['Niveau', 'Acteurs'], NIVEAUX.map(n => [n, String(AN.maturite[n])]));
})();

(function verticaleSegment() {
  const fig = $('#chart-verticale-segment');
  const series = SEGMENTS.map(sg => ({ key: sg, label: sg, color: SEG_COLOR[sg] }));
  const rows = AN.verticales.map(v => ({ label: v, parts: AN.verticale_segment[v] || {} }));
  stackedChart(fig, rows, series, { aria: 'Segments par verticale sectorielle' });
  tableView(fig, 'Acteurs par verticale et segment (un acteur compte dans chacune de ses verticales).',
    ['Verticale', 'Produit', 'Service', 'Conseil'],
    rows.map(r => [r.label, String(r.parts.produit || 0), String(r.parts.service || 0), String(r.parts.conseil || 0)]));
})();

(function revenus() {
  const fig = $('#chart-revenus');
  const compte = {};
  for (const a of A) for (let m of a.modele_revenus.split(';')) {
    m = m.trim(); if (m && m !== 'nd') compte[m] = (compte[m] || 0) + 1;
  }
  const items = Object.entries(compte).sort((x, y) => y[1] - x[1]);
  barChart(fig, items.map(([m, n]) => ({ label: m, value: n, color: 'var(--series-1)' })),
    { left: 118, width: 420, aria: 'Modèles de revenus pratiqués' });
  tableView(fig, 'Modèles de revenus (un acteur peut en cumuler plusieurs).', ['Modèle', 'Acteurs'],
    items.map(([m, n]) => [m, String(n)]));
})();

(function hebergement() {
  const fig = $('#chart-hebergement');
  const items = Object.entries(AN.hebergement).sort((x, y) => y[1] - x[1]);
  // mise en évidence : le manque de transparence est l'information
  barChart(fig, items.map(([h, n]) => ({
    label: h, value: n,
    color: h === 'Non précisé' ? 'var(--series-2)' : 'var(--series-1)'
  })), { left: 130, width: 440, aria: 'Hébergement des données annoncé' });
  legend(fig, [{ label: 'documenté', color: 'var(--series-1)' }, { label: 'non précisé publiquement', color: 'var(--series-2)' }]);
  tableView(fig, 'Hébergement des données tel qu\'annoncé publiquement (normalisé).', ['Hébergement', 'Acteurs'],
    items.map(([h, n]) => [h, String(n)]));
})();

(function tablePrix() {
  const t = el('table');
  const trh = el('tr');
  for (const h of ['Acteur', 'Statut', 'Cible', 'Prix publics (23.07.2026)']) trh.append(el('th', { scope: 'col', text: h }));
  t.append(el('caption', { text: 'Prix publiés sur les sites des acteurs au 23.07.2026 ; tous les autres acteurs : non disponible publiquement.' }), el('thead', {}, trh));
  const tb = el('tbody');
  for (const a of A.filter(x => x.prix_public).sort((x, y) => x.nom.localeCompare(y.nom))) {
    const tr = el('tr');
    tr.append(el('th', { scope: 'row', text: a.nom }), el('td', { text: a.statut }), el('td', { text: a.cible }), el('td', { text: a.fourchette_prix }));
    tb.append(tr);
  }
  t.append(tb);
  $('#table-prix').append(t);
})();

/* ---------- 6. Matrice de positionnement ---------- */
(function matrice() {
  const AXES = {
    autonomie: {
      label: 'Autonomie de l\'offre', cats: ['infrastructure', 'chatbot', 'RAG', 'workflow', 'agents autonomes'],
      val: a => a.agenticite_niveau === 0 ? 0 : a.agenticite_niveau
    },
    specialisation: {
      label: 'Spécialisation', cats: ['généraliste', 'multi-verticales', 'focalisé', 'spécialiste'],
      val: a => ['généraliste', 'multi-verticales', 'focalisé', 'spécialiste'].indexOf(a.specialisation)
    },
    cible: { label: 'Cible', cats: ['B2B', 'B2B+B2C', 'B2C'], val: a => ['B2B', 'B2B+B2C', 'B2C'].indexOf(a.cible) },
    transparence: { label: 'Transparence des prix', cats: ['prix non publiés', 'prix publics'], val: a => a.prix_public ? 1 : 0 },
  };
  const selX = $('#m-axe-x'), selY = $('#m-axe-y');
  for (const [k, ax] of Object.entries(AXES)) {
    selX.append(el('option', { value: k, text: ax.label }));
    selY.append(el('option', { value: k, text: ax.label }));
  }
  selX.value = 'autonomie'; selY.value = 'specialisation';
  const fig = $('#chart-matrice');

  function draw() {
    fig.textContent = '';
    const ax = AXES[selX.value], ay = AXES[selY.value];
    const W = 680, H = 420, left = 120, bottom = 46, top = 16, right = 20;
    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `Matrice : ${ax.label} contre ${ay.label}` });
    const bandX = (W - left - right) / ax.cats.length, bandY = (H - top - bottom) / ay.cats.length;
    ax.cats.forEach((c, i) => {
      s.append(svg('line', { x1: left + i * bandX, y1: top, x2: left + i * bandX, y2: H - bottom, stroke: 'var(--grid)', 'stroke-width': '1' }),
        svg('text', { x: left + (i + 0.5) * bandX, y: H - bottom + 18, 'text-anchor': 'middle', 'font-size': '11', fill: 'var(--muted)', text: c }));
    });
    ay.cats.forEach((c, i) => {
      const y = H - bottom - (i + 0.5) * bandY;
      s.append(svg('line', { x1: left, y1: H - bottom - i * bandY, x2: W - right, y2: H - bottom - i * bandY, stroke: 'var(--grid)', 'stroke-width': '1' }),
        svg('text', { x: left - 8, y: y + 4, 'text-anchor': 'end', 'font-size': '11', fill: 'var(--muted)', text: c }));
    });
    s.append(svg('line', { x1: left, y1: H - bottom, x2: W - right, y2: H - bottom, stroke: 'var(--baseline)' }),
      svg('line', { x1: left, y1: top, x2: left, y2: H - bottom, stroke: 'var(--baseline)' }));
    // dispersion déterministe dans la case (index de l'acteur, pas d'aléa : rendu stable)
    A.forEach((a, i) => {
      const vx = ax.val(a), vy = ay.val(a);
      if (vx < 0 || vy < 0) return;
      const jx = ((i * 37) % 100) / 100 - 0.5, jy = ((i * 61) % 100) / 100 - 0.5;
      const x = left + (vx + 0.5 + jx * 0.72) * bandX;
      const y = H - bottom - (vy + 0.5 + jy * 0.72) * bandY;
      const eff = a.effectif_num;
      const r = eff ? Math.max(4, Math.min(16, 2.4 * Math.sqrt(Math.sqrt(eff) * 2))) : 4;
      const g = svg('g', { tabindex: '0' });
      // anneau de surface 2px sous chaque disque pour la lisibilité des recouvrements
      g.append(svg('circle', { cx: x, cy: y, r: r + 2, fill: 'var(--surface-1)' }),
        svg('circle', { cx: x, cy: y, r, fill: SEG_COLOR[a.segment], 'fill-opacity': eff ? '0.92' : '0.45' }),
        svg('circle', { cx: x, cy: y, r: Math.max(r + 2, 12), fill: 'transparent' })); // cible de survol ≥ 24px
      hover(g, a.nom, [
        { value: a.degre_agenticite, label: '· ' + a.specialisation, color: SEG_COLOR[a.segment] },
        { value: a.effectif_estime === 'nd' ? 'effectif non disponible publiquement' : 'effectif : ' + a.effectif_estime },
        { value: a.canton + ' · ' + a.segment }]);
      s.append(g);
    });
    legend(fig, SEGMENTS.map(sg => ({ label: sg, color: SEG_COLOR[sg] })));
    fig.append(s);
    tableView(fig, 'Position de chaque acteur sur les axes choisis ; bulle = effectif estimé (opacité réduite si inconnu).',
      ['Acteur', ax.label, ay.label, 'Effectif estimé', 'Segment'],
      A.map(a => [a.nom, ax.cats[ax.val(a)] || 'hors échelle', ay.cats[ay.val(a)] || 'hors échelle', a.effectif_estime, a.segment]));
  }
  selX.addEventListener('change', draw);
  selY.addEventListener('change', draw);
  draw();
})();

/* ---------- 7. Heatmap zones blanches ---------- */
(function heatmap() {
  const fig = $('#chart-heatmap');
  const ramp = ['var(--seq-250)', 'var(--seq-350)', 'var(--seq-450)', 'var(--seq-550)', 'var(--seq-600)'];
  const verts = AN.verticales;
  const W = 700, cellW = 96, cellH = 26, left = 200, top = 66;
  const H = top + verts.length * (cellH + 2) + 10;
  const maxV = Math.max(...verts.flatMap(v => NIVEAUX.map(n => AN.verticale_maturite[v][n])));
  const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': 'Heatmap des verticales par niveau de maturité' });
  const COLS = ['chatbot', 'RAG', 'workflow', 'agents autonomes', 'infrastructure'];
  NIVEAUX.forEach((n, j) => {
    s.append(svg('text', { x: left + j * (cellW + 2) + cellW / 2, y: top - 30, 'text-anchor': 'middle', 'font-size': '11', fill: 'var(--text-secondary)', text: COLS[j] }));
  });
  s.append(svg('text', { x: left + 2 * (cellW + 2) + cellW / 2, y: top - 48, 'text-anchor': 'middle', 'font-size': '10.5', fill: 'var(--muted)', text: '← autonomie croissante →' }));
  verts.forEach((v, i) => {
    const y = top + i * (cellH + 2) - 24;
    s.append(svg('text', { x: left - 8, y: y + cellH / 2 + 4, 'text-anchor': 'end', 'font-size': '11', fill: 'var(--text-secondary)', text: v }));
    NIVEAUX.forEach((n, j) => {
      const val = AN.verticale_maturite[v][n];
      const x = left + j * (cellW + 2);
      let cell;
      if (val === 0) {
        cell = svg('rect', { x, y, width: cellW, height: cellH, rx: 3, class: 'cell-vide', 'stroke-width': '1', tabindex: '0' });
        hover(cell, v, [{ value: 'VIDE', label: '· ' + n + ' : zone blanche' }]);
      } else {
        const step = ramp[Math.min(ramp.length - 1, Math.floor((val / maxV) * ramp.length))];
        cell = svg('rect', { x, y, width: cellW, height: cellH, rx: 3, fill: step, tabindex: '0' });
        hover(cell, v, [{ value: `${val} acteurs`, label: '· ' + n, color: step }]);
      }
      s.append(cell);
      if (val > 0) {
        const dark = val / maxV >= 0.4; // encre choisie selon la luminance du fond
        s.append(svg('text', { x: x + cellW / 2, y: y + cellH / 2 + 4, 'text-anchor': 'middle', 'font-size': '11', fill: dark ? '#ffffff' : '#0b0b0b', text: String(val) }));
      }
    });
  });
  fig.append(s);
  tableView(fig, 'Acteurs par verticale et niveau de maturité ; 0 = zone blanche.',
    ['Verticale', ...COLS],
    verts.map(v => [v, ...NIVEAUX.map(n => String(AN.verticale_maturite[v][n]))]));
})();

(function tableZones() {
  const t = el('table');
  const trh = el('tr');
  for (const h of ['Zone blanche', 'Constat chiffré', 'Source']) trh.append(el('th', { scope: 'col', text: h }));
  t.append(el('thead', {}, trh));
  const tb = el('tbody');
  for (const z of AN.zones_blanches) {
    tb.append(el('tr', {}, [el('th', { scope: 'row', text: z.zone }), el('td', { text: z.constat }), el('td', { text: z.source })]));
  }
  t.append(tb);
  $('#table-zones').append(t);
})();

/* ---------- 8. Angles stratégiques ---------- */
(function anglesScores() {
  const fig = $('#chart-angles-scores');
  const items = [...AN.angles].sort((x, y) => y.total - x.total).map(a => ({
    label: `${a.id} · ${a.nom}`, value: a.total,
    color: a.retenu ? 'var(--series-1)' : 'var(--de-emphasis)',
    valueLabel: `${a.total}/35`,
    tipTitle: a.nom,
    tip: AN.criteres_angles.map((c, i) => ({ value: String(a.scores[i]), label: c }))
  }));
  barChart(fig, items, { left: 230, width: 680, aria: 'Score total des angles stratégiques candidats' });
  legend(fig, [{ label: 'angle retenu', color: 'var(--series-1)' }, { label: 'autres candidats', color: 'var(--de-emphasis)' }]);
  tableView(fig, 'Notes par critère (1 à 5, 5 = favorable). Estimations raisonnées, pondération uniforme.',
    ['Angle', ...AN.criteres_angles, 'Total'],
    AN.angles.map(a => [`${a.id} · ${a.nom}`, ...a.scores.map(String), `${a.total}/35`]));
})();

(function anglesRadar() {
  const fig = $('#chart-angles-radar');
  const sel = $('#a-compare');
  for (const a of AN.angles.filter(x => !x.retenu)) sel.append(el('option', { value: a.id, text: `${a.id} · ${a.nom}` }));
  sel.value = 'E';
  const retenu = AN.angles.find(x => x.retenu);
  const LABELS = ['Besoin', 'Concurrence', 'Technique', 'Cycle vente', 'Capital', 'Défendable', '1er revenu'];

  function draw() {
    fig.textContent = '';
    const comp = AN.angles.find(x => x.id === sel.value);
    const W = 380, H = 330, cx = 190, cy = 168, R = 108, K = AN.criteres_angles.length;
    const s = svg('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img', 'aria-label': `Radar : ${retenu.nom} contre ${comp.nom}` });
    const pt = (i, v) => {
      const a = -Math.PI / 2 + i * 2 * Math.PI / K;
      return [cx + (v / 5) * R * Math.cos(a), cy + (v / 5) * R * Math.sin(a)];
    };
    for (const ring of [1, 2, 3, 4, 5]) {
      s.append(svg('polygon', { points: Array.from({ length: K }, (_, i) => pt(i, ring).join(',')).join(' '), fill: 'none', stroke: 'var(--grid)', 'stroke-width': '1' }));
    }
    LABELS.forEach((c, i) => {
      const [x, y] = pt(i, 6.15);
      s.append(svg('line', { x1: cx, y1: cy, x2: pt(i, 5)[0], y2: pt(i, 5)[1], stroke: 'var(--grid)' }),
        svg('text', { x, y: y + 4, 'text-anchor': 'middle', 'font-size': '10.5', fill: 'var(--text-secondary)', text: c }));
    });
    for (const [angle, color] of [[comp, 'var(--series-2)'], [retenu, 'var(--series-1)']]) {
      const pts = angle.scores.map((v, i) => pt(i, v));
      s.append(svg('polygon', { points: pts.map(p => p.join(',')).join(' '), fill: color, 'fill-opacity': '0.10', stroke: color, 'stroke-width': '2', 'stroke-linejoin': 'round' }));
      pts.forEach((p, i) => {
        const g = svg('g', { tabindex: '0' });
        g.append(svg('circle', { cx: p[0], cy: p[1], r: 6, fill: 'var(--surface-1)' }),
          svg('circle', { cx: p[0], cy: p[1], r: 4, fill: color }),
          svg('circle', { cx: p[0], cy: p[1], r: 12, fill: 'transparent' }));
        hover(g, AN.criteres_angles[i], [
          { value: String(retenu.scores[i]), label: retenu.nom, color: 'var(--series-1)' },
          { value: String(comp.scores[i]), label: comp.nom, color: 'var(--series-2)' }]);
        s.append(g);
      });
    }
    legend(fig, [{ label: `${retenu.id} · ${retenu.nom} (retenu)`, color: 'var(--series-1)', line: true },
    { label: `${comp.id} · ${comp.nom}`, color: 'var(--series-2)', line: true }]);
    fig.append(s);
    tableView(fig, 'Notes des deux angles comparés (1 à 5, 5 = favorable).',
      ['Critère', retenu.nom, comp.nom],
      AN.criteres_angles.map((c, i) => [c, String(retenu.scores[i]), String(comp.scores[i])]));
  }
  sel.addEventListener('change', draw);
  draw();
})();

/* ---------- 9. Annuaire ---------- */
(function annuaire() {
  const COLS = [
    { key: 'nom', label: 'Nom' }, { key: 'canton', label: 'Canton' },
    { key: 'statut', label: 'Statut' }, { key: 'cible', label: 'Cible' },
    { key: 'degre_agenticite', label: 'Maturité' },
    { key: 'verticales_aff', label: 'Verticales' },
    { key: 'niveau_confiance', label: 'Confiance' }];
  for (const a of A) a.verticales_aff = a.verticales_norm.filter(v => v !== 'Autres').join(', ');
  let tri = { key: 'nom', dir: 1 };
  const head = $('#annuaire-head'), body = $('#annuaire-body'), fiche = $('#fiche');

  // options de filtre
  const opts = (sel, vals) => { for (const v of vals) $(sel).append(el('option', { value: v, text: v })); };
  opts('#f-canton', [...new Set(A.map(a => a.canton))].sort());
  opts('#f-segment', SEGMENTS);
  opts('#f-cible', ['B2B', 'B2C', 'B2B+B2C']);
  opts('#f-verticale', [...AN.verticales]);
  opts('#f-maturite', NIVEAUX);

  for (const c of COLS) {
    const th = el('th', { scope: 'col', tabindex: '0', role: 'button', 'aria-label': 'Trier par ' + c.label }, [
      el('span', { text: c.label + ' ' }), el('span', { class: 'arrow', 'aria-hidden': 'true', text: '↕' })]);
    const go = () => {
      tri = { key: c.key, dir: tri.key === c.key ? -tri.dir : 1 };
      render();
    };
    th.addEventListener('click', go);
    th.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    head.append(th);
  }

  function filtres() {
    const q = $('#f-recherche').value.toLowerCase();
    return A.filter(a =>
      (!$('#f-canton').value || a.canton === $('#f-canton').value) &&
      (!$('#f-segment').value || a.segment === $('#f-segment').value) &&
      (!$('#f-cible').value || a.cible === $('#f-cible').value) &&
      (!$('#f-verticale').value || a.verticales_norm.includes($('#f-verticale').value)) &&
      (!$('#f-maturite').value || a.degre_agenticite === $('#f-maturite').value) &&
      (!q || [a.nom, a.ville, a.description_offre, a.verticales, a.verticales_aff, a.stack_technique, a.clients_references].join(' ').toLowerCase().includes(q)));
  }

  function montreFiche(a) {
    fiche.textContent = '';
    fiche.hidden = false;
    const close = el('button', { class: 'btn secondary close', text: 'Fermer', onclick: () => { fiche.hidden = true; } });
    fiche.append(close, el('h3', { text: a.nom }),
      el('p', {}, [el('span', { class: 'badge conf-' + a.niveau_confiance, text: 'confiance ' + a.niveau_confiance }),
      el('span', { class: 'note', text: '  ·  données consultées le ' + a.date_consultation })]));
    const dl = el('dl');
    const champs = [['Localisation', `${a.ville} (${a.canton})`], ['Année de création', a.annee_creation],
    ['Effectif estimé', a.effectif_estime], ['Statut', `${a.statut} · segment ${a.segment}`], ['Cible', a.cible],
    ['Verticales', a.verticales], ['Offre', a.description_offre], ['Degré d\'agenticité', a.degre_agenticite],
    ['Stack annoncée', a.stack_technique], ['Modèle de revenus', a.modele_revenus], ['Prix', a.fourchette_prix],
    ['Financement', a.financement], ['Clients références', a.clients_references], ['Langues', a.langues],
    ['Hébergement', a.hebergement_donnees]];
    for (const [k, v] of champs) { dl.append(el('dt', { text: k }), el('dd', { text: v || 'nd' })); }
    fiche.append(dl);
    const lien = el('a', { href: a.url, target: '_blank', rel: 'noopener noreferrer', text: a.url });
    fiche.append(el('p', {}, [el('strong', { text: 'Site : ' }), lien]));
    fiche.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    close.focus();
  }

  function render() {
    const rows = filtres().sort((x, y) => {
      const a1 = String(x[tri.key] || ''), b1 = String(y[tri.key] || '');
      return tri.dir * a1.localeCompare(b1, 'fr');
    });
    body.textContent = '';
    for (const a of rows) {
      const tr = el('tr', { tabindex: '0', 'aria-label': 'Fiche ' + a.nom });
      tr.append(el('th', { scope: 'row', text: a.nom }));
      for (const c of COLS.slice(1)) tr.append(el('td', { text: String(a[c.key] || '') }));
      tr.addEventListener('click', () => montreFiche(a));
      tr.addEventListener('keydown', e => { if (e.key === 'Enter') montreFiche(a); });
      body.append(tr);
    }
    $('#compteur-annuaire').textContent = `${rows.length} acteur(s) affiché(s) sur ${A.length}.`;
    window.__vueFiltree = rows;
  }

  for (const id of ['#f-recherche', '#f-canton', '#f-segment', '#f-cible', '#f-verticale', '#f-maturite']) {
    $(id).addEventListener('input', render);
  }
  $('#f-reset').addEventListener('click', () => {
    for (const id of ['#f-recherche', '#f-canton', '#f-segment', '#f-cible', '#f-verticale', '#f-maturite']) $(id).value = '';
    render();
  });
  $('#f-export').addEventListener('click', () => {
    const cols = ['nom', 'canton', 'ville', 'annee_creation', 'effectif_estime', 'statut', 'cible', 'verticales',
      'description_offre', 'degre_agenticite', 'stack_technique', 'modele_revenus', 'fourchette_prix', 'financement',
      'clients_references', 'langues', 'hebergement_donnees', 'url', 'date_consultation', 'niveau_confiance'];
    const esc = v => /[",;\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
    const csv = [cols.join(',')].concat((window.__vueFiltree || A).map(a => cols.map(c => esc(String(a[c] || ''))).join(','))).join('\n');
    const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' });
    const a = el('a', { href: URL.createObjectURL(blob), download: 'acteurs_vue_filtree.csv' });
    document.body.append(a); a.click(); a.remove();
  });
  render();
})();

/* ---------- 10. Sources ---------- */
(function sources() {
  const wrap = $('#table-sources');
  function render(q) {
    wrap.textContent = '';
    const list = AN.sources.filter(s => !q || (s.titre + ' ' + s.usage).toLowerCase().includes(q));
    if (!AN.sources.length) {
      wrap.append(el('p', { class: 'note', text: 'Bibliographie complète dans 06_sources.md (régénérer les données du site après sa création : python3 scripts/gen_site_data.py).' }));
      return;
    }
    const t = el('table');
    const trh = el('tr');
    for (const h of ['Source', 'Consultée le', 'Fiabilité', 'Utilisée pour']) trh.append(el('th', { scope: 'col', text: h }));
    t.append(el('caption', { text: `${list.length} source(s) affichée(s) sur ${AN.sources.length}. Bibliographie complète : 06_sources.md.` }), el('thead', {}, trh));
    const tb = el('tbody');
    for (const s of list) {
      const a = el('a', { href: s.url, target: '_blank', rel: 'noopener noreferrer', text: s.titre });
      tb.append(el('tr', {}, [el('th', { scope: 'row' }, a), el('td', { text: s.date }), el('td', { text: s.fiabilite }), el('td', { text: s.usage })]));
    }
    t.append(tb);
    wrap.append(el('div', { class: 'table-wrap' }, t));
  }
  $('#s-recherche').addEventListener('input', e => render(e.target.value.toLowerCase()));
  render('');
})();

/* ---------- Bascule de thème ---------- */
(function theme() {
  const btn = $('#theme-toggle');
  const stocke = localStorage.getItem('theme');
  if (stocke) document.documentElement.dataset.theme = stocke;
  function label() {
    const dark = (document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
    btn.textContent = dark ? 'Mode clair' : 'Mode sombre';
    btn.setAttribute('aria-pressed', String(dark));
  }
  btn.addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('theme', next);
    label();
  });
  label();
})();
