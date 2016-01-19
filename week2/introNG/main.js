// console.log(angular)

// Top Level Component - Module
angular.module('bananaTree', []) // Creating a module called bananaTree
// angular.module('bananaTree'); // Referencing a CREATED module

// Register a controller to our module
angular
	.module('bananaTree')
		.controller('bananaTroller', ['$scope', function($scope){

			// console.log('hello from the controller')
			// Whatever is attached to $scope can be referenced in HTML
			$scope.greeting = "Sup Dude?"
			
			$scope.showGreeting = function(){
				console.log($scope.greeting)
			}
			$scope.showUnicorn = function(){
				console.log($scope.unicorn)
			}

		}])