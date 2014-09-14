(function(){

	var customerFactory = function() {
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
		var factory = {};
		factory.getCustomers = function() {
			return customers; 
		};
		factory.getCustomer = function(id) {
			for (var i = 0; i < customers.length; i++) {
				if (customers[i].id === parseInt(id)) {
					return customers[i];
				}
			}
			return {};
		};
		return factory;
	};

	// angular.module('AngularTestModule').factory(customerFactory);

})();