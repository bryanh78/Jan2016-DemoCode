angular.module('HeroesApp')
  .factory('justiceFactory', ['$resource', function($resource){

    // console.log($resource)

    // /api/heroes is our BASE route
    // /:id denotes an OPTIONAL paramter
    var Hero = $resource('/api/heroes/:id', {id : '@_id'})
    // @ -> this
    // @_id -> this._id
    // DBOBJ._id

    // GET -> /api/heroes      -> Find Many  -> Hero.query()
    // GET -> /api/heroes/:id  -> Find One   -> Hero.get()

    // POST -> /api/heroes     -> Create     -> HeroOBJ.$save()
    // POST -> /api/heroes/:id -> Update     -> HeroOBJ.$save()


    return {
      Hero : Hero
    }

  }])
