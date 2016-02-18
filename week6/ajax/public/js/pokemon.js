(function() {
  'use strict';
  // THE JOHN PAPA WAY
  angular.module('pokeApp',[])
    //create an angular factory
    .factory('pokeFactory', PokeFactory)
    //create an angular controller
    .controller('pokeController', PokeController)
    //dependency injection
    PokeFactory.$inject = [ '$http' ]
    PokeController.$inject = [ 'pokeFactory' ]
    //create the factory function
    function PokeFactory ( $http ){
      // create variables for your api end points
      var pokedexURL = 'http://pokeapi.co/api/v1/pokedex/1'
      // created an empty object literal to return when function is complete
      var pokefactory = {}

      pokefactory.getAllPokemon = function ( ){

      //Create the $http get request to the pokedex url
      return $http.get(pokedexURL)


      }
      // return our filled object
      return pokefactory
    }
    //create the controller function
    function PokeController ( pokeFactory ){
      var pokeCtrl = this
      pokeCtrl.title = 'POKEDEX 1'
      // attaching pokeFactory to the controller
      pokeCtrl.api = pokeFactory
      // var to hold all pokemon
      pokeCtrl.allPokemon = []
      //make get request
      pokeCtrl.api.getAllPokemon()
        .success(function(data) {
          console.log("Getting all pokemon:",data.pokemon);
          // set the allPokemon variable
          pokeCtrl.allPokemon = data.pokemon;
          console.log("allPokemon=", pokeCtrl.allPokemon);
        });
    }
})();