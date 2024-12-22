
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/color-picker/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6024, hash: 'c60c3b7eee85e06c893ef7a4824e749f285fdae84eab493eab7fb4228b360de9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1137, hash: '4341c4c90095b09ed12a67fd7f80ab9f4ce5252710695844c0e2bbb1f88a31ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LITYSAE5.css': {size: 305342, hash: 'UGhU8yTJzEs', text: () => import('./assets-chunks/styles-LITYSAE5_css.mjs').then(m => m.default)}
  },
};
