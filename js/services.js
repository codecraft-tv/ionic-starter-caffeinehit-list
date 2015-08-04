var app = angular.module('caffeinehit.services', []);

app.service("YelpService", function ($q, $http) {
	var self = {
		'page': 1,
		'isLoading': false,
		'hasMore': true,
		'results': [],
		'lat': 51.544440,
		'lon': -0.022974,
		'refresh': function () {
			self.page = 1;
			self.isLoading = false;
			self.hasMore = true;
			self.results = [];
			return self.load();
		},
		'next': function () {
			self.page += 1;
			return self.load();
		},
		'load': function () {
			self.isLoading = true;
			var deferred = $q.defer();

			var params = {
				page: self.page,
				lat: self.lat,
				lon: self.lon
			};

			$http.get('https://codecraftpro.com/api/samples/v1/coffee/', {params: params})
				.success(function (data) {
					self.isLoading = false;
					console.log(data);

					//if (data.businesses.length == 0) {
					//	self.hasMore = false;
					//} else {
					//	angular.forEach(data.businesses, function (business) {
					//		self.results.push(business);
					//	});
					//}

					deferred.resolve();
				})
				.error(function (data, status, headers, config) {
					self.isLoading = false;
					deferred.reject(data);
				});

			return deferred.promise;
		}
	};

	self.load();

	return self;
});