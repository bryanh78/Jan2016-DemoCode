// Top level component in Angular - Module
angular.module('genghisMod', []); //Creating a module

//angular.module('genghisMod') //Fetching a module that's already been created

angular
	.module('genghisMod')
		.controller('mongoller', [
			'$scope',
			'$timeout',
			function($scope, $timeout){
				$scope.greeting = "Bow before Khan!"

				// $scope.horde[i] ~ warrior
				$scope.horde = [
					{
						name : 'Mulan',
						img  : 'https://tse1.mm.bing.net/th?id=OIP.Mc8093eaa0b84e615cb2011fb59b27ee8H0&pid=15.1'
					},
					{
						name : 'Marco Polo',
						img  : 'http://1.bp.blogspot.com/--ytXwVtmxlI/TiVvmknXugI/AAAAAAAARI0/vjsnEbsEh8Y/s1600/image0.jpg'
					},
					{
						name : 'Jeff',
						img  : 'http://i3.kym-cdn.com/entries/icons/original/000/008/445/jeff.jpg'
					},
					{
						name : 'Napolean',
						img  : 'http://modernborefare.files.wordpress.com/2012/09/young-napoleon-on-horse-by-david.jpg'
					},
				]
				// $scope.textColor = 'rgb(128,128,128)'
				$scope.addLiuKang = function(){
				// $scope.textColor = 'rgb(200,100,50)'

					$scope.horde.push({
						name : 'Liu Kang',
						img  : 'http://www.fightersgeneration.com/characters2/liukang-dec.jpg'
					})
				}
				$scope.addWarrior = function(){
					$scope.horde.push($scope.newWarrior)
					$scope.newWarrior = {} // Reset the form and remove the reference to the object that was pushed into horde

					console.log($scope.horde)
					console.log($scope.newWarrior)
				}
				// $timeout($scope.addLiuKang, 8000)

				// $timeout(function(){
					// $scope.horde.push({
					// 	name : 'Liu Kang'
					// })
				// }, 8000)
	}])

		// 2 CONTROLLERS

angular
	.module('genghisMod')
		.controller('mongoller2',['$scope', function($scope){

		}])