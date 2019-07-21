self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/chunks/commons.6395559e28a9b9eb01c4.js",
    "revision": "c68f096c0af125b4e7f8"
  },
  {
    "url": "/connectN/_next/static/j-UfDXc0nX3ERVRFLqKRi/pages/_app.js",
    "revision": "105127139206523cc40a"
  },
  {
    "url": "/connectN/_next/static/j-UfDXc0nX3ERVRFLqKRi/pages/_error.js",
    "revision": "0c8ac67818557c401140"
  },
  {
    "url": "/connectN/_next/static/j-UfDXc0nX3ERVRFLqKRi/pages/connect-n.js",
    "revision": "e7623b5d065f318d1789"
  },
  {
    "url": "/connectN/_next/static/j-UfDXc0nX3ERVRFLqKRi/pages/index.js",
    "revision": "8aee8ebae90da044de2c"
  },
  {
    "url": "/connectN/_next/static/j-UfDXc0nX3ERVRFLqKRi/pages/tic-tac-toe.js",
    "revision": "5de399098702894d4bf2"
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
