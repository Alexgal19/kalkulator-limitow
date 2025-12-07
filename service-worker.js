self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('kalkulator-limitow-cache').then((cache) => {
      return cache.addAll([
        './kalkulator%20limitów.html',
        './icon.png',
        './manifest.json',
        './',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});