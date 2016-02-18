angular.module('FruitCity')
	.controller('fruitTroller', ['$scope', '$http', 'FruitFactory', function ($scope, $http, FruitFactory){
		$scope.greeting = "Welcome to Fruit City!"
		
		FruitFactory.getFruits().then(function(returnData){
			console.log('From the server : ', returnData)
			$scope.fruits = returnData.data
		})
		
		$scope.createFruit = FruitFactory.createFruit
		
		
		// SAME AS : 
		// $http.get('/api/fruits').then(function(returnData){
		// 	console.log('From the server : ', returnData)
		// })
		// This is because getFruits is returning $http.get('/api/fruits')
	}])