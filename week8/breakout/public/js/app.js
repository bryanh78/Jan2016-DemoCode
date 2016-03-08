angular.module('userApp', [])

angular.module('userApp')
	.controller('userController', ['$scope', '$http', userController])

function userController ($scope, $http){
	console.log('control the user!')

	// Retrieve the user
	$http.get('/me')
		.then(function(returnData){
			if(!returnData.data.user){
				// Kick em out
				window.location.href = '/'
				// $location.url()
			}
			else{
				// rest of controller goes here
				$scope.user = returnData.data.user

			}
		})


}