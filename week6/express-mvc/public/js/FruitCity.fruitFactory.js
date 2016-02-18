angular.module('FruitCity')
	.factory('FruitFactory', ['$http', function($http){
		
		var getFruits = function(){
			return $http.get('/api/fruits')
		}
		
		var createFruit = function(fruitData){
			return $http.post('/api/fruits', fruitData)
		}
		
		return {
			getFruits : getFruits,
			createFruit : createFruit
		}
	}])