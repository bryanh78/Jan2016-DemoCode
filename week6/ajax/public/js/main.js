angular.module('ModJaxx', []);

angular.module('ModJaxx')
	.controller('controlJaxx', ['$scope', '$http', function($scope, $http){

		$scope.greeting = 'Woohoo Sandwiches!'
		$scope.sandwichLoader = 'Loading...'
		// $http.get()
		$http.get('/api/sandwiches')
			.then(function(dataFromServer){
				$scope.sandwiches = dataFromServer.data
			})

		$scope.makeMeASandwich = function(){
			// console.log('You\'re a sandwich')

			// POST information to the server
			$http.post('/api/sandwiches', $scope.newSandwich)
				.then(function(dataFromServer){
					// console.log(dataFromServer)
					$scope.sandwiches = dataFromServer.data
					$scope.newSandwich = {}
				})
		}

	}])