self.addEventListener('install', function(event) {
	console.log('[Service Worker] installing Service worker.....', event);
event.waitUntil(caches.open('staticc')
	.then(function(cache) {
	 cache.add('/')
	 cache.add('index.html')
	 cache.add('css/home.css')	
	 cache.add('imgs/pic.jpg')	
	 cache.add('imgs/atwork.jpg')	
	 cache.add('imgs/contact_btn.jpg')	
	 cache.add('imgs/resume_btn.jpg')	
	 cache.add('imgs/facebook.png')	
	 cache.add('imgs/linkedin.png')	
	 cache.add('imgs/twitter.png')	
	 cache.add('imgs/image2.jpg')	
	 cache.add('css/bootstrap.min.css')	
	 cache.add('js/jquery-3.2.1.min.js')	
	 cache.add('js/bootstrap.min.js')	
	 cache.add('js/app.js')

	})

);	

});
self.addEventListener('activate', function(event) {
	// console.log('[Service Worker] activating Service worker.....', event);

});
self.addEventListener('fetch', function(event) {
	// console.log('[Service Worker] activating Service worker.....', event);
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			if (response) {
				return response;
			}else{
				return fetch(event.request);
			}
			})
		);
});