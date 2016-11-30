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
    .when('/tinylions' ,{
      templateUrl: '/views/templates/tinylions.html',
      controller: 'TinyLionController',
      controllerAs: 'tinylions'
    })
    .when('/wingz' ,{
      templateUrl: '/views/templates/wingz.html',
      controller: 'WingzController',
      controllerAs: 'wingz'
    })
    .otherwise({
      redirectTo: 'doggo'
    });

}]);
