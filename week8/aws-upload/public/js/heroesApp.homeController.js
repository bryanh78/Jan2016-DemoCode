angular.module('HeroesApp')
	.controller('homeController', ['$scope', '$http', 'justiceFactory', 'Upload', homeController])

function homeController ($scope, $http, justiceFactory, Upload){
	$scope.greeting = 'Welcome to Heroes of AJAX'

	$scope.createHero = function(){

		
		Upload.upload({
			url : '/api/heroes',
			data : {
				files : $scope.newHero.costume,
				data : $scope.newHero
			}
		})
		
		
		
		
		// $http.post('/api/heroes', $scope.newHero)
		// 	.then(function(returnData){
		// 		$scope.heroes = $scope.heroes || []
		// 		$scope.heroes.push(returnData.data)
		// 		$scope.newHero = {}
		// 	})
	}
	$scope.createHQ = function(){
		$http.post('/api/hqs', $scope.newHQ)
			.then(function(returnData){
				$scope.newHQ = {}
			})
	}

	$scope.heroes = justiceFactory.Hero.query(function(data){
			console.log('optional callback!', data)

			// data[0].name = 'Clayton'
			// data[0].costume = 'https://tse1.mm.bing.net/th?id=OIP.Mc640a53d2e8f2351d49071b81aac62dco0&w=148&h=105&c=7&rs=1&qlt=90&pid=3.1&rm=2'
			//
			// data[0].$save()

	})

	// $http.get('/api/heroes')
	// 	.then(function(returnData){
	// 		console.log('GET : ', returnData)
	// 		$scope.heroes = returnData.data
	// 	})

	// $scope.getHeroes = function(){

	// }
}
