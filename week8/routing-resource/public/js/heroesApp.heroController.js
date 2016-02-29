angular.module('HeroesApp')
	.controller('heroController', ['$scope', '$http', '$routeParams', heroController])

function heroController ($scope, $http, $routeParams){
// Express -> req.params to hold our paramters
// $routeParams -> req.params for angular

	// console.log('yay heroes', $routeParams)
	var heroID = $routeParams.id

	$http.get('/api/heroes/' + heroID)
		.then(function(serverResponse){
			// console.log(serverResponse)
			$scope.hero = serverResponse.data
		})

}
