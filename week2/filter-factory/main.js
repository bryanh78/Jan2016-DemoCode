angular.module('fundayFriday', [])

angular.module('fundayFriday')
	.factory('coffeeFactory', [function(){
		var dontReturnMe = true
		var coffees = [
			{
				name : 'Mocha',
				origin : 'Yemen',
				roast : 'Dark'
			},
			{
				name : 'Black Gold',
				origin : 'Acapulco',
				roast : 'Dark'
			},
			{
				name : 'Dunkin` Donuts',
				origin : 'Dumpster',
				roast : 'Who cares?'
			}
		]

		// Value of factory when injected into controller
		// is whatever we return from the factory
		return {
			coffeeList : coffees,
			doYouLikeCoffee : function(){
				console.log('I like coffee')
			}
		}
	}])

// ----------------- //
// ---Controllers---//
// ---------------- //

angular.module('fundayFriday')
	.controller('manicMonday', ['$scope', 'coffeeFactory', '$filter', function($scope, coffeeFactory, $filter){
		$scope.day = 'Monday'
		console.log('!!!', coffeeFactory)
		$scope.todaysMenu = coffeeFactory.coffeeList

		var exciter = $filter('excite')

		coffeeFactory.coffeeList
		for(var i = 0; i < coffeeFactory.coffeeList.length; i++){
			 coffeeFactory.coffeeList[i].origin  = exciter( coffeeFactory.coffeeList[i].origin )
		}

		// function myFunc(){
		// 	var myStuff = 'wassup'
		// 	return myStuff
		// }
		// console.log(myFunc())

		// var myFunc = function(){}


	}])

angular.module('fundayFriday')
	.controller('tenaciousTuesday', ['$scope', 'coffeeFactory', '$timeout', function($scope, coffeeFactory, $timeout){
		$scope.day = 'Tuesday'
		$scope.todaysMenu = coffeeFactory.coffeeList
		
		// We can push a NEW coffee into our list of coffees that was
		// created on our factory to see the changes in all controllers
		$timeout(function(){

			coffeeFactory.coffeeList.push({
				name : 'Magical Unicorn Coffee',
				origin : 'Narnia',
				roast : 'Rainbow'
			})

		}, 5000)
		
	}])

// ----------- //
// ---Filter---//
// ----------- //

angular.module('fundayFriday')
	.filter('excite', function(){

		// expression is an implicit argument
		// it is the value you are trying to transform
		return function(expression, depressed){

			if(depressed){
				return expression.toLowerCase() + '... i guess'
			}
			else{
				return expression.toUpperCase() + '!!'
			}
		}


	})