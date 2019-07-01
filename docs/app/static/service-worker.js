self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/4MHW-5jhK-tG9HJpjoSw2/pages/_app.js",
    "revision": "73ffb910fa2ac76ccb87"
  },
  {
    "url": "/connectN/_next/static/4MHW-5jhK-tG9HJpjoSw2/pages/_error.js",
    "revision": "630f00ce5fd84ec72dcd"
  },
  {
    "url": "/connectN/_next/static/4MHW-5jhK-tG9HJpjoSw2/pages/about.js",
    "revision": "5b2614fd3c6e0d46b6ee"
  },
  {
    "url": "/connectN/_next/static/4MHW-5jhK-tG9HJpjoSw2/pages/index.js",
    "revision": "0be8ce734b569c5990ba"
  },
  {
    "url": "/connectN/_next/static/4MHW-5jhK-tG9HJpjoSw2/pages/loading.js",
    "revision": "fd19508404b09cf16f1e"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
  },
  {
    "url": "/connectN/_next/static/runtime/main-db1eb209f792c1c3ecf1.js",
    "revision": "6c9cb6f386b684d24b83"
  },
  {
    "url": "/connectN/_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "d284d55719907d9579fa"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
