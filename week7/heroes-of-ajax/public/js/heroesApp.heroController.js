angular.module('HeroesApp')
	.controller('heroController', ['$scope', '$http', heroController])

function heroController ($scope, $http){
	// console.log('yay heroes')
	var heroID = window.location.pathname.split('/').pop()

	$http.get('/api/heroes/' + heroID)
		.then(function(serverResponse){
			// console.log(serverResponse)
			$scope.hero = serverResponse.data
		})

}