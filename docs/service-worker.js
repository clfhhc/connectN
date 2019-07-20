self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/B39oaoaF5nVhD4hP-pCvw/pages/_app.js",
    "revision": "96a598221f87d58a051f"
  },
  {
    "url": "/connectN/_next/static/B39oaoaF5nVhD4hP-pCvw/pages/_error.js",
    "revision": "1abf691de418122a499e"
  },
  {
    "url": "/connectN/_next/static/B39oaoaF5nVhD4hP-pCvw/pages/connect-n.js",
    "revision": "9b73db9edc3354cb66d6"
  },
  {
    "url": "/connectN/_next/static/B39oaoaF5nVhD4hP-pCvw/pages/tic-tac-toe.js",
    "revision": "c896cd7eda1913ea0bba"
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
