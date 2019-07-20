self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/chunks/commons.081ef41b6832ec59c913.js",
    "revision": "89138bf9000c59f6419d"
  },
  {
    "url": "/connectN/_next/static/runtime/main-c96baa9e78025e6144b0.js",
    "revision": "efcfcf3ec2cf966a9b13"
  },
  {
    "url": "/connectN/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
  },
  {
    "url": "/connectN/_next/static/yEQHyGKT7DhvfGvRcLXoh/pages/_app.js",
    "revision": "e3d24ff31d69b9a54042"
  },
  {
    "url": "/connectN/_next/static/yEQHyGKT7DhvfGvRcLXoh/pages/_error.js",
    "revision": "f08cf41ffd95897c0f95"
  },
  {
    "url": "/connectN/_next/static/yEQHyGKT7DhvfGvRcLXoh/pages/connect-n.js",
    "revision": "e168fe418188db68b4b9"
  },
  {
    "url": "/connectN/_next/static/yEQHyGKT7DhvfGvRcLXoh/pages/index.js",
    "revision": "0eba2497833043e22c16"
  },
  {
    "url": "/connectN/_next/static/yEQHyGKT7DhvfGvRcLXoh/pages/tic-tac-toe.js",
    "revision": "18a46868b7a5489c618a"
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
