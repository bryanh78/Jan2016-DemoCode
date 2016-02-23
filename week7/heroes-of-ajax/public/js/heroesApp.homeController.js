angular.module('HeroesApp')
	.controller('homeController', ['$scope', '$http', homeController])

function homeController ($scope, $http){
	$scope.greeting = 'Welcome to Heroes of AJAX'

	$scope.createHero = function(){
		$http.post('/api/heroes', $scope.newHero)
			.then(function(returnData){
				$scope.heroes = $scope.heroes || []
				$scope.heroes.push(returnData.data)
				$scope.newHero = {}
			})
	}

	$http.get('/api/heroes')
		.then(function(returnData){
			console.log('GET : ', returnData)
			$scope.heroes = returnData.data
		})

	// $scope.getHeroes = function(){

	// }
}

