
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'color-picker',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6022, hash: '1e8e5716e6f8e3d73c1a7087fd317081876b368510870d091eda5be5cc781d1a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1135, hash: '091ede53e789fe83909ac350c713170d08c7f1b71337648fdd92f584258e5cb9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LITYSAE5.css': {size: 305342, hash: 'UGhU8yTJzEs', text: () => import('./assets-chunks/styles-LITYSAE5_css.mjs').then(m => m.default)}
  },
};
