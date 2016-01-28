angular.module('myApp', [])

angular.module('myApp')
	.factory('superFactory', [function(){

		var superHeroes = [
			{
				name : 'Leaf Erikson',
				powers : ['Photosynthesis', 'Beating Christopher Columbus']
			},
			{
				name : 'Trilobyte Man',
				powers : ['Command Trilobytes', 'Locate Fossils']
			},
			{
				name : 'ToastMaster',
				powers : ['Human WiFi Hotspot', 'ToasterTongue']
			}

		]

		// var villains = [dasklasdkjlsdalkj]

		return {
			superHeroes : superHeroes,
			// villains : villains
		}


	}])


angular.module('myApp')
	.controller('superController', ['$scope','superFactory', function($scope, superFactory){
		$scope.greeting = {message : 'Child Scopes'}
		$scope.hello = 'hello'
		console.log('SUPER : ', $scope)
		$scope.superHeroes = superFactory.superHeroes
		
		$scope.showScope = function(hello){
			console.log('HELLO : ', hello)
			$scope.hello = hello
			console.log('SCOPE : ', $scope)
		}




	}])











angular.module('myApp')
	.controller('batmanController', ['$scope', function($scope){
		// $scope.greeting = 'I\'m BATMAN!'
		$scope.hello = 'goodbye'
		console.log('BATMAN : ', $scope)

	}])