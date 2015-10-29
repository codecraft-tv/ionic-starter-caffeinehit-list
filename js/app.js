var app = angular.module('caffeinehit', [
	'ionic',
	'ngCordova',
	'caffeinehit.controllers',
	'caffeinehit.services',
	'caffeinehit.filters'
]);

app.run(function ($ionicPlatform) {
	$ionicPlatform.ready(function () {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
});

app.config(function ($httpProvider) {
	//$httpProvider.defaults.headers.common['Authorization'] = 'Token 9f988aecf297aedcb4880d0b0d4b4507e7eb85f2';
	$httpProvider.defaults.headers.common['Authorization'] = 'Token 20002cd74d5ce124ae219e739e18956614aab490';
});
