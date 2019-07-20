const isProd = process.env.NODE_ENV === 'production';
const prodAssetPrefix = '/connectN';
const serviceWorkerFilename = 'service-worker.js';
const ampInstallServiceworkerScriptHtml = 'amp-install-serviceworker-script.html';

module.exports = {
  linkPrefix: isProd ? prodAssetPrefix : '',
  isProd,
  prodAssetPrefix,
  serviceWorkerFilename,
  ampInstallServiceworkerScriptHtml,
};
