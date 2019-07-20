self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/PiaEE6fy-P0Q4-M4ZxNT2/pages/_app.js",
    "revision": "3053bfaa75544b090d39"
  },
  {
    "url": "/connectN/_next/static/PiaEE6fy-P0Q4-M4ZxNT2/pages/_error.js",
    "revision": "6e58c3b64a0fb91cd6bf"
  },
  {
    "url": "/connectN/_next/static/PiaEE6fy-P0Q4-M4ZxNT2/pages/connect-n.js",
    "revision": "e37d77ec11fd40790720"
  },
  {
    "url": "/connectN/_next/static/PiaEE6fy-P0Q4-M4ZxNT2/pages/tic-tac-toe.js",
    "revision": "ede8cedc0eeb26aa8af7"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.a651434c2f2de7a3b951.js",
    "revision": "509a088985f292c0b39b"
  },
  {
    "url": "/connectN/_next/static/runtime/main-0be3a36595844a02f351.js",
    "revision": "d79c0dc7525a32a944c9"
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
