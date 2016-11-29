var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/smallfurry' ,{
      templateUrl: '/views/templates/smallfurry.html',
      controller: 'FurryController',
      controllerAs: 'furry'
    })
    .when('/barnyard' ,{
      templateUrl: '/views/templates/barnyard.html',
      controller: 'BarnController',
      controllerAs: 'barnyard'
    })
    .when('/doggo' ,{
      templateUrl: '/views/templates/doggo.html',
      controller: 'DoggoController',
      controllerAs: 'doggo'
    })
    .otherwise({
      redirectTo: 'doggo'
    });

}]);


app.controller('DoggoController', ['$http', function($http) {
  console.log('doggo controller up and running');
  var key = 'bfe9d3977a90f8c813e56978bcfbec99';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'https://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&animal=dog';
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();
}]);

app.controller('BarnController', ['$http', function($http) {
  console.log('barn controller up and running');
  var key = 'bfe9d3977a90f8c813e56978bcfbec99';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'https://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&animal=barnyard';
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();
}]);

app.controller('FurryController', ['$http', function($http) {
  console.log('Furry controller up and running');
  var key = 'bfe9d3977a90f8c813e56978bcfbec99';
  var self = this;

  self.animal = {};

  self.getRandomPet = function(){
    var query = 'https://api.petfinder.com/'; // baseURL for API
    query += 'pet.getRandom'; // selecting the method we would like to return
    query += '?key=' + key; // Giving petfinder our key
    query += '&format=json'; // Telling petfinder we want our response to be JSON
    query += '&animal=smallfurry';
    query += '&output=basic'; // Telling petfinder what data we want (more than just id)
    var request = encodeURI(query) + '&callback=JSON_CALLBACK'; // removing spaces and special characters from response as well as making jsonp work with the callback

    console.log('Request:', request);

    $http.jsonp(request).then(function(response){
      console.log(response);
      self.animal = response.data.petfinder.pet;
    });

  }

  self.getRandomPet();
}]);
