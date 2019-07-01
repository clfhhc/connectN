self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/EdECR354HsIEP2F0eLvXV/pages/_app.js",
    "revision": "52a209ed9ce57de38a7a"
  },
  {
    "url": "/connectN/_next/static/EdECR354HsIEP2F0eLvXV/pages/_error.js",
    "revision": "6f2e6d21a8f70383dca6"
  },
  {
    "url": "/connectN/_next/static/EdECR354HsIEP2F0eLvXV/pages/about.js",
    "revision": "fe631f26e62e7a89a4c6"
  },
  {
    "url": "/connectN/_next/static/EdECR354HsIEP2F0eLvXV/pages/index.js",
    "revision": "e294ba23b18619fc6450"
  },
  {
    "url": "/connectN/_next/static/EdECR354HsIEP2F0eLvXV/pages/loading.js",
    "revision": "80d4cdf0c3f6dba0babd"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
  },
  {
    "url": "/connectN/_next/static/runtime/main-1308266f4a72cdd088e8.js",
    "revision": "b4e7d04081e192234e23"
  },
  {
    "url": "/connectN/_next/static/runtime/webpack-a79426b5e11f0ba5879d.js",
    "revision": "d284d55719907d9579fa"
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

workbox.routing.registerRoute(/^https?.*/, new workbox.strategies.NetworkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({ maxEntries: 200, purgeOnQuotaError: false })] }), 'GET');
