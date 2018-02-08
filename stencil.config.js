exports.config = {
  bundles: [
    { components: ['my-app', 'app-home'] },
    { components: ['app-profile'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' }
  ],
  globalStyle: 'src/global/app.scss',
  enableCache: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
