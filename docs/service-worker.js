self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/YeeNNcAOJLEzWqkNXmL_k/pages/_app.js",
    "revision": "4bc7586f018b8129014e"
  },
  {
    "url": "/connectN/_next/static/YeeNNcAOJLEzWqkNXmL_k/pages/_error.js",
    "revision": "967efa2290c8e36e11d5"
  },
  {
    "url": "/connectN/_next/static/YeeNNcAOJLEzWqkNXmL_k/pages/connect-n.js",
    "revision": "f3433ed7c2e539eb138c"
  },
  {
    "url": "/connectN/_next/static/YeeNNcAOJLEzWqkNXmL_k/pages/index.js",
    "revision": "3a99c248dc9e7e537215"
  },
  {
    "url": "/connectN/_next/static/YeeNNcAOJLEzWqkNXmL_k/pages/tic-tac-toe.js",
    "revision": "bfd1f2948d6e21e18af6"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.c0ff968e8056dbe18476.js",
    "revision": "010ecdbc35970e3937f0"
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
