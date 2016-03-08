// Create our module and pass in the ngRoute module as a dependency
angular.module('RobotTurkeyMapleLeaf', ['ngRoute'])
// angular.module('ngRoute', [])

// Next, we need to tell our module we're going to be routing using ngRoute
// and define those routes
angular.module('RobotTurkeyMapleLeaf')
	.config(function($routeProvider){
		// $routeProvider is a service contained on ngRoute
		// Must also use the directive ng-view
		$routeProvider
			.when('/', {
				templateUrl : '/html/home.html', // route on SERVER where the template file lives
				controller  : 'homeController'  // name of angular CONTROLLER to use with the template
			})
			.when('/robots', {
				templateUrl : '/html/robots.html',
				controller : 'robotController'
			})
			.when('/about', {
				templateUrl : '/html/about.html',
				controller : 'mapleLeafController'
			})
			.when('/stuff', {
				templateUrl : '/html/stuff.html',
				controller : 'stuffingController'
			})

	})



angular.module('RobotTurkeyMapleLeaf')
	.controller('homeController', ['$scope', homeController])

angular.module('RobotTurkeyMapleLeaf')
	.controller('robotController', ['$scope', robotController])

angular.module('RobotTurkeyMapleLeaf')
	.controller('mapleLeafController', ['$scope', mapleLeafController])

angular.module('RobotTurkeyMapleLeaf')
	.controller('stuffingController', ['$scope', stuffingController])

function homeController ($scope){
	console.log('I am the home Controller!')
}
function robotController ($scope){
	console.log('I am the ROBOT Controller!')
}
function mapleLeafController ($scope){
	console.log('I am the MAPLE LEAF Controller!')
}
function stuffingController ($scope){
	console.log('I am the STUFFING Controller!')
}