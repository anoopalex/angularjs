(function(){

	var AllOrdersController = function($scope, titles) {

		var customers = [
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

		$scope.orders = [];

		function init() {
			for(var i = 0; i < customers.length; i++) {
				var orders = customers[i].orders;
				for(var j = 0; j < orders.length; j++) {
					$scope.orders[$scope.orders.length] = orders[j];
				}
			}
		}
		init();

		$scope.sortOrdersBy = 'name';
		$scope.reverse = true;
		$scope.title = titles.orders;

		$scope.orderBy = function(columnName) {
			if($scope.sortOrdersBy === columnName) {
				$scope.reverse = !$scope.reverse;
			}
			$scope.sortOrdersBy = columnName;
		};
	};

	angular.module('AngularTestModule').controller('AllOrdersController', ['$scope', 'titles', AllOrdersController]);

})();