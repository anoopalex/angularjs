(function(){

	angular.module('AngularTestModule', ['ngRoute', 'ngAnimate']);

	var location = "/AngularJSJumpStart-tests/chapter6";

	var routingConfig = function($routeProvider) {
		$routeProvider
			.when('/customers', {
				controller: 'CustomerController',
				templateUrl: location + '/app/views/customers.html'
			})
			.when('/orders', {
				controller: 'AllOrdersController',
				templateUrl: location + '/app/views/orders.html'
			})
			.when('/order/:customerID', {
				controller: 'OrderController',
				templateUrl: location + '/app/views/order.html'
			})
			.otherwise({
				redirectTo: '/customers'
			});
	};

	angular.module('AngularTestModule').config(['$routeProvider', routingConfig]);

})();