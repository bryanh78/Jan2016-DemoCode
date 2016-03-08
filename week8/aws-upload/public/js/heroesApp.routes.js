angular.module('HeroesApp')
  .config(['$routeProvider', function($routeProvider){

    // app.get('/', function(req, res){
    // Describe how to handle the route
  //})

    // http://localhost:3000  / -> Express route      #/ -> Angular route
    // localhost/#/
    $routeProvider
      .when('/', {
        templateUrl : '/html/homeBody.html', //What the view/HTML file to use at this route
        controller  : 'homeController'//Set the angular controller to use at this route
      })
      .when('/heroes/:id', {
        templateUrl : '/html/hero.html',
        controller  : 'heroController'
      })

  }])
