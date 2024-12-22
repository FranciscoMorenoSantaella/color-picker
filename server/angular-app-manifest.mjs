
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6011, hash: 'a9427af70cf24ef827172804f18aa70c6a45912322576740b206171992aefb42', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: '900a04b91fa7e66991d12200c3599540e9d226c2eb03663a6cb1fe08cc0df845', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LITYSAE5.css': {size: 305342, hash: 'UGhU8yTJzEs', text: () => import('./assets-chunks/styles-LITYSAE5_css.mjs').then(m => m.default)}
  },
};
