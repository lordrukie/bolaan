importScripts(
	'https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js'
);
if (workbox) console.log(`Workbox Succes Brow`);
else console.log(`Waduh, Workbox Gagal Brow`);

workbox.precaching.precacheAndRoute(
	[
		{ url: '/index.html', revision: '5' },
		{ url: '/assets/js/api.js', revision: '2' },
		{ url: '/assets/js/jquery.min.js', revision: '2' },
		{ url: '/assets/js/route.js', revision: '2' },
		{ url: '/assets/js/materialize.min.js', revision: '2' },
		{ url: '/assets/js/shell.js', revision: '2' },
		{ url: '/assets/js/sw-regis.js', revision: '2' },
		{ url: '/assets/js/notifikasi.js', revision: '2' },
		{ url: '/assets/js/db.js', revision: '2' },
		{ url: '/assets/js/show.js', revision: '2' },
		{ url: '/assets/js/idb.js', revision: '2' },
		{ url: '/pages/liga.html', revision: '2' },
		{ url: '/pages/team.html', revision: '2' },
		{ url: '/pages/home.html', revision: '2' },
		{ url: '/pages/fav.html', revision: '2' },
		{ url: '/assets/shell/sidenav.html', revision: '2' },
		{ url: '/assets/shell/topnav.html', revision: '2' },
		{ url: '/assets/image/bolaan.png', revision: '2' },
		{ url: '/assets/image/bola.png', revision: '2' },
		{ url: '/assets/image/author.png', revision: '2' },
		{ url: '/assets/image/bola_512.png', revision: '2' },
		{ url: '/assets/image/bola_192.png', revision: '2' },
		{ url: '/assets/css/materialize.min.css', revision: '2' },
		{ url: '/assets/css/style.css', revision: '2' },
		{ url: '/manifest.json', revision: '2' },
	],
	{
		ignoreUrlParametersMatching: [/.*/],
	}
);
workbox.routing.registerRoute(
	new RegExp('https://api.football-data.org/v2/'),
	workbox.strategies.networkFirst({
		cacheName: 'fetch',
	})
);

self.addEventListener('push', (event) => {
	let body;
	if (event.data) {
		body = event.data.text();
	} else {
		body = 'Push message no payload';
	}
	let options = {
		body: body,
		icon: '/assets/image/bola.png',
		badge: '/assets/image/bola.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1,
		},
	};
	event.waitUntil(
		self.registration.showNotification('Push Notification', options)
	);
});
