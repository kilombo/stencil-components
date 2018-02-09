exports.config = {
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
