(function(){

	var CustomerController = function($scope, customerService) {

		$scope.customers = [];
		$scope.reverse = false;
		$scope.maxResults = 10;
		$scope.sortColumn = 'name';

		$scope.orderBy = function(columnName) {
			$scope.reverse = !$scope.reverse;
			$scope.sortColumn = columnName;
		};

		function init() {
			$scope.customers = customerService.getCustomers();
		}
		init();		

	};

	angular.module('AngularTestModule').controller('CustomerController', ['$scope', 'customerService', CustomerController]);
	
})();