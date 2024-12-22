
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://franciscomorenosantaella.github.io/color-picker',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6065, hash: 'd5b718a69319e7fbba483e66fdeafa44eea05920b9770163e2d6f9f929c2f8cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1178, hash: 'a11834e0046bea11541c64c815e096a35871c7032bdd0dae3c13b008d539fc61', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LITYSAE5.css': {size: 305342, hash: 'UGhU8yTJzEs', text: () => import('./assets-chunks/styles-LITYSAE5_css.mjs').then(m => m.default)}
  },
};
