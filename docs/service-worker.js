self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/chunks/commons.c0ff968e8056dbe18476.js",
    "revision": "010ecdbc35970e3937f0"
  },
  {
    "url": "/connectN/_next/static/n_Iz2mHsx2d1OnTo3dNAE/pages/_app.js",
    "revision": "824891b0517ce7d5a3b4"
  },
  {
    "url": "/connectN/_next/static/n_Iz2mHsx2d1OnTo3dNAE/pages/_error.js",
    "revision": "616adcde1e29c9c596f3"
  },
  {
    "url": "/connectN/_next/static/n_Iz2mHsx2d1OnTo3dNAE/pages/connect-n.js",
    "revision": "f1cc60ec63d636214489"
  },
  {
    "url": "/connectN/_next/static/n_Iz2mHsx2d1OnTo3dNAE/pages/index.js",
    "revision": "726920f0f86e03315535"
  },
  {
    "url": "/connectN/_next/static/n_Iz2mHsx2d1OnTo3dNAE/pages/tic-tac-toe.js",
    "revision": "ca4ded862a883b6efb5c"
  },
  {
    "url": "/connectN/_next/static/runtime/main-0fdd651ffeceb525100c.js",
    "revision": "e0798ecf6aa93ab21bbd"
  },
  {
    "url": "/connectN/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
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

workbox.navigationPreload.enable();

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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache","networkTimeoutSeconds":15, plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(({ event }) => event.request.mode === 'navigate', new workbox.strategies.CacheFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 150, maxAgeSeconds: 2592000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
