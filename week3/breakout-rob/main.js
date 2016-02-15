function checkEmail (email){
	return email.match(/.+@.+\.(com|edu)/)
}
angular.module('humpDay', [])

angular.module('humpDay')
	.controller('humpTroller', ['$scope', function($scope){
		// console.log('hello')
		// Our app is going to keep track of Its Always Sunny characters
		$scope.cast = []
		$scope.checkFile = function(element){
			console.log('change', $scope)
		    $scope.$apply(function() {
		        $scope.myFile = element.files[0];
		    });
		}
		$scope.createCharacter = function(){
			// console.log('this is working')
			// console.log($scope)
			console.log('Email to check : ', $scope.character.email, checkEmail($scope.character.email))
			
			// Check to see if email is valid
			// if( checkEmail($scope.character.email) ){

				// $scope.character contains info from the form
				$scope.cast.push($scope.character) // Salt N Peppa yall
				$scope.character = {}
				$scope.error = ""

			// }
			// else{
				// $scope.error = "You got a bad email bruh"
			// }

			console.log($scope.cast)
		}

		$scope.chooseMember = function(castMember){
			console.log(castMember)
			castMember.name = 'REDACTED'

		}
		$scope.getCast = function(){
			return $scope.cast
		}


	}])


// Custom directive!
angular.module('humpDay')
	.directive('poker', function(){
	  return {
	    restrict : 'AE', // restricting to attribute/element, can also restrict E (element) or C (class)
		template : '<h1>CLICK ME</h1>', // Used to define how directive looks when used as element
		//templateURL : '../templates/something.html'
	    link : function(scope, element) {
	        element.bind("click", function(){
	          console.log("STOP POKING ME!!", scope);
	        })
	      }
	  }
});
