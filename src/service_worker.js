// src/service-worker.js

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'); 

workbox.core.setCacheNameDetails({
  prefix: 'my-pwa',
  suffix: 'v1',
});

// Enable all clients to use the new service worker immediately
self.skipWaiting();
self.clientsClaim();

// Precache all files injected by Workbox (from webpack)
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Optional: Cache runtime assets like images, API calls, etc.
workbox.routing.registerRoute(
  /\.(png|jpg|jpeg|svg|gif)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
);

// Example route for API caching
workbox.routing.registerRoute(
  /\/api\//,
  new workbox.strategies.NetworkFirst({
    cacheName: 'api-cache'
  })
);