angular.module('myApp', []);

angular.module('myApp')
	.controller('myController', ['$scope', function($scope){
		$scope.greeting = 'DIRECTIVE PARTY!'
		$scope.costume = 'vampire costume'

		$scope.partyPeople = []

		$scope.clickParty = function(event){
			console.log( event.preventDefault() )
			// console.log('liu kangs not here')
			$scope.greeting = 'Walk the Dinosaur'
		}

		$scope.costumeSubmission = function(){
			console.log('We are wearing : ', $scope.costume)
			$scope.costume = $scope.myCostume
			$scope.partyPeople.push($scope.myCostume)
			$scope.myCostume = ''
		}

		$scope.whichHulk = function(ind){
			console.log(ind, $scope.partyPeople[ind])
		}

		$scope.pressinDaKeys = function(keyCode){
			console.log('we pressed da keys!', keyCode)
			if(keyCode === 32){
				$scope.myCostume = ''
			}
		}

	}])

	// var area = function(height, width){
	// 	return height * width
	// }

	// area({name : 'Bill'}, 5)