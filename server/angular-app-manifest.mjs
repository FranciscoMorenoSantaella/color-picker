
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 6011, hash: 'c25ce5afc34712023ce9d527d03da07097e6a98f01fd2c4fefc4d48ecf6b0c2f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: '44202ef98774749e5fb332b3d9785fc01a18dedbf57e2cc689d2f3e127b83689', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-LITYSAE5.css': {size: 305342, hash: 'UGhU8yTJzEs', text: () => import('./assets-chunks/styles-LITYSAE5_css.mjs').then(m => m.default)}
  },
};
