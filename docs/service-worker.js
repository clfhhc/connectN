self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/6T0GVySO6H0gNouErbXdj/pages/_app.js",
    "revision": "36e15e385b05809e05d2"
  },
  {
    "url": "/connectN/_next/static/6T0GVySO6H0gNouErbXdj/pages/_error.js",
    "revision": "5a212dd3ba004edacb4b"
  },
  {
    "url": "/connectN/_next/static/6T0GVySO6H0gNouErbXdj/pages/connect-n.js",
    "revision": "58211192e78c92760163"
  },
  {
    "url": "/connectN/_next/static/6T0GVySO6H0gNouErbXdj/pages/index.js",
    "revision": "316f514ca412598fda0f"
  },
  {
    "url": "/connectN/_next/static/6T0GVySO6H0gNouErbXdj/pages/tic-tac-toe.js",
    "revision": "ad98e78ab5e8b000be51"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.e4ee8c4f323e3a8c57ac.js",
    "revision": "b89ebdcd67fe7f269a33"
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
