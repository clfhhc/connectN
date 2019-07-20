self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.a651434c2f2de7a3b951.js",
    "revision": "509a088985f292c0b39b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-176a55f7068f052914c2.js",
    "revision": "785c368b5a3d9fe5b476"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rusZYQYO1AJolR2juujHn/pages/_app.js",
    "revision": "88ae4c01509ed3681824"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rusZYQYO1AJolR2juujHn/pages/_error.js",
    "revision": "1656ddd003de9b0a1784"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rusZYQYO1AJolR2juujHn/pages/connectN.js",
    "revision": "6dac6840734477a13cc2"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/rusZYQYO1AJolR2juujHn/pages/ticTacToe.js",
    "revision": "56c891acaeee7e445dab"
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
