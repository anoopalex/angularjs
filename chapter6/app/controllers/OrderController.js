(function(){

	var OrderController = function($scope, $routeParams, titles) {

		$scope.title = titles.order;
		$scope.orders = null;
		$scope.customer = null;
		var customerID = $routeParams.customerID;

		$scope.customers = [
			{
				id: 1,
				name: 'Michaele',
				age: 44,
				gender: 'male',
				joined: '2005-06-27',
				orders: [
					{
						name: 'Kindle',
						quantity: 3,
						cost: 45
					},
					{
						name: 'Smartphone',
						quantity: 1,
						cost: 350
					}
				]
			},
			{
				id: 2,
				name: 'Lorena',
				age: 25,
				gender: 'female',
				joined: '2014-09-08',
				orders: [
					{
						name: 'Vibrator',
						quantity: 5,
						cost: 22
					}
				]
			},
			{
				id: 3,
				name: 'Leonel',
				age: 27,
				gender: 'male',
				joined: '2010-04-03',
				orders: [
					{
						name: 'Ball',
						quantity: 1,
						cost: 15
					},
					{
						name: 'Uniform',
						quantity: 2,
						cost: 95
					}
				]
			},
			{
				id: 4,
				name: 'Joel',
				age: 40,
				gender: 'male',
				joined: '2014-07-10',
				orders: [
					{
						name: 'TV',
						quantity: 2,
						cost: 300
					},
					{
						name: 'PC',
						quantity: 1,
						cost: 750
					},
					{
						name: 'Bluray Player',
						quantity: 2,
						cost: 155
					}
				]
			},
		];

		function init() {
			for (var i = 0; i < $scope.customers.length; i++) {
				if ($scope.customers[i].id === parseInt(customerID)) {
					$scope.customer = $scope.customers[i];
					$scope.orders = $scope.customers[i].orders;
					break;
				}
			}
		}

		init();
	};

	angular.module('AngularTestModule').controller('OrderController', ['$scope', '$routeParams', 'titles', OrderController]);
	
})();