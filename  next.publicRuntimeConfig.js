const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/connectN';
const serviceWorkerFilename = 'service-worker.js';
const ampInstallServiceworkerScriptHtml = 'amp-install-serviceworker-script.html';
const commonKeyWords =
  'connect4, connect four, 4 player games, connect 4 online,' +
  '4 in a row, game, connect game, tic tac toe, 3 in a row,' +
  'play tic tac toe, bitwise, nextjs, code splitting,' +
  'react, redux, github pages, serviceworker, pwa';

module.exports = {
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
  serviceWorkerFilename,
  ampInstallServiceworkerScriptHtml,
  commonKeyWords,
};
