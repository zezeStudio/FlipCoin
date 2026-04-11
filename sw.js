const CACHE_NAME = 'zeze-hub-v1.6.1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/main.js',
  '/manifest.json',
  '/favicon.png',
  '/fortunes.json',
  '/about',
  '/about.html',
  '/privacy',
  '/privacy.html',
  '/terms',
  '/terms.html',
  '/contact',
  '/contact.html',
  '/hub-guide',
  '/hub-guide.html',
  '/insights/',
  '/insights/blog.html',
  '/magiclamp/',
  '/magiclamp/lamp.html',
  '/magiclamp/magiclamp-guide',
  '/magiclamp/magiclamp-guide.html',
  '/coinflip/',
  '/coinflip/flip.html',
  '/coinflip/coinflip-guide',
  '/coinflip/coinflip-guide.html',
  '/destinydice/',
  '/destinydice/dice.html',
  '/destinydice/destinydice-guide',
  '/destinydice/destinydice-guide.html',
  '/ladderclimb/',
  '/ladderclimb/climb.html',
  '/ladderclimb/ladderclimb-guide',
  '/ladderclimb/ladderclimb-guide.html',
  '/drawinglots/',
  '/drawinglots/lots.html',
  '/drawinglots/drawinglots-guide',
  '/drawinglots/drawinglots-guide.html',
  '/teammaker/',
  '/teammaker/make.html',
  '/teammaker/teammaker-guide',
  '/teammaker/teammaker-guide.html',
  '/cardflip/',
  '/cardflip/card.html',
  '/cardflip/cardflip-guide',
  '/cardflip/cardflip-guide.html',
  '/timebomb/',
  '/timebomb/bomb.html',
  '/timebomb/timebomb-guide',
  '/timebomb/timebomb-guide.html'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS);
      })
  );
});

// Fetch Assets (Stale-While-Revalidate Strategy)
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and browser extensions
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Update cache with the new response
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => {
            // If network fails, we already have the cached response (if any)
        });

        // Return cached response immediately if available, otherwise wait for network
        return cachedResponse || fetchPromise;
      });
    })
  );
});

// Activate and Clean Old Cache
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
  return self.clients.claim();
});
