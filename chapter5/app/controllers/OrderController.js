(function(){

	var OrderController = function($scope, $routeParams, customerService) {
		$scope.customers = [];
		$scope.orders = [];
		$scope.customer = {};

		var customerID = $routeParams.customerID;
		function init() {
			$scope.customers = customerService.getCustomers();
			$scope.customer = customerService.getCustomer(customerID);
			$scope.orders = $scope.customer.orders;
		}
		init();
	};

	angular.module('AngularTestModule').controller('OrderController', ['$scope', '$routeParams', 'customerService', OrderController]);
	
})();