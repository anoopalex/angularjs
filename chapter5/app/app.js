(function(){

	angular.module('AngularTestModule', ['ngRoute']);

	var location = "/AngularJSJumpStart-tests/chapter5";

	var routingConfig = function($routeProvider) {
		$routeProvider
			.when(location + '/', {
				controller: 'CustomerController',
				templateUrl: location + '/app/views/customer.html'
			})
			.when(location + '/order/:customerID', {
				controller: 'OrderController',
				templateUrl: location + '/app/views/order.html'
			})
			.otherwise({
				redirectTo: location + '/'
			});
	};

	angular.module('AngularTestModule').config(['$routeProvider', routingConfig]);

})();