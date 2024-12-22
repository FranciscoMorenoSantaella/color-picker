
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/color-picker/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6024, hash: 'f0b87ce2f39d263aab043392b52f11dc61c6c33bdb4b0e97bb94837538a9a6d9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1137, hash: '7c2a7a46ca3ec490381ea07174a106967c65d362fd3a4289e23d0cf3917f7a8e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LITYSAE5.css': {size: 305342, hash: 'UGhU8yTJzEs', text: () => import('./assets-chunks/styles-LITYSAE5_css.mjs').then(m => m.default)}
  },
};
