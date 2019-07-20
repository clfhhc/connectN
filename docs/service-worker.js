self.__precacheManifest = [
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/chunks/commons.a651434c2f2de7a3b951.js",
    "revision": "509a088985f292c0b39b"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/main-bd06856657f35371d326.js",
    "revision": "c012f364407a035f27d4"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/runtime/webpack-3df6523e264ff2ac6548.js",
    "revision": "b0a559ac8f238b6fd6f7"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uSTxD15OAu1hiVVeYAg8X/pages/_app.js",
    "revision": "3c6433d058fd81c7de39"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uSTxD15OAu1hiVVeYAg8X/pages/_error.js",
    "revision": "6bca09eb9b7b10241b44"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uSTxD15OAu1hiVVeYAg8X/pages/connectN.js",
    "revision": "ba994491f42f9dc99c6a"
  },
  {
    "url": "/Nextjs_Ts_Eslint/_next/static/uSTxD15OAu1hiVVeYAg8X/pages/ticTacToe.js",
    "revision": "6ccb4ac91f9dbe22849c"
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
