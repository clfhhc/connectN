self.__precacheManifest = [
  {
    "url": "/connectN/_next/static/IA_3z9Lx2SAR1nzjLbdB0/pages/_app.js",
    "revision": "32bc2ad8c0de4414d57e"
  },
  {
    "url": "/connectN/_next/static/IA_3z9Lx2SAR1nzjLbdB0/pages/_error.js",
    "revision": "5d06b4c787fa61e29c9f"
  },
  {
    "url": "/connectN/_next/static/IA_3z9Lx2SAR1nzjLbdB0/pages/about.js",
    "revision": "7f5577a58acbe129cc63"
  },
  {
    "url": "/connectN/_next/static/IA_3z9Lx2SAR1nzjLbdB0/pages/index.js",
    "revision": "b4999d04ad68b8501142"
  },
  {
    "url": "/connectN/_next/static/IA_3z9Lx2SAR1nzjLbdB0/pages/loading.js",
    "revision": "208112ea9e7c5a26bef8"
  },
  {
    "url": "/connectN/_next/static/chunks/commons.534aa6d02e011dba7c8c.js",
    "revision": "b7b072ae369c940c86f3"
  },
  {
    "url": "/connectN/_next/static/runtime/main-c9b90ecaf9aac26230e5.js",
    "revision": "17b9cc30dc39b4f79447"
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
