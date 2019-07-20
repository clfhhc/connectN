self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/_Gej9vr00QpkxP6lTLqj7/pages/_app.js",
    "revision": "59185df7aaa2be5d5240"
  },
  {
    "url": "/connectN/_next/static/_Gej9vr00QpkxP6lTLqj7/pages/_error.js",
    "revision": "fd895f98c1c1eee3ee02"
  },
  {
    "url": "/connectN/_next/static/_Gej9vr00QpkxP6lTLqj7/pages/connect-n.js",
    "revision": "a6917afc86ba8e48b833"
  },
  {
    "url": "/connectN/_next/static/_Gej9vr00QpkxP6lTLqj7/pages/index.js",
    "revision": "424ac300d0671fc601fe"
  },
  {
    "url": "/connectN/_next/static/_Gej9vr00QpkxP6lTLqj7/pages/tic-tac-toe.js",
    "revision": "81476333bb66f546f62a"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.b20ec17e7e69d255d764.js",
    "revision": "e90f107a25c67d2808e2"
  },
  {
    "url": "/connectN/_next/static/runtime/main-f6a67da19b2818bfda9b.js",
    "revision": "0d1d51da5b09c8ef286b"
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
