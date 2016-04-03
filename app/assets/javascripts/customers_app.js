var app = angular.module('customers',[]); 

app.controller("CustomerSearchController", [ 
          '$scope',                          
  function($scope) {                         
    $scope.customers = [];
    $scope.search = function(searchTerm) {   
      $scope.customers = [
        {
          "first_name":"Esteban",
          "last_name":"Zamora",
          "email":"zamora0@macgyver.net",
          "username":"estibo",
          "created_at":"2016-01-01",
        },
        {
          "first_name":"Asbante",
          "last_name":"Arozam",
          "email":"arozam@rennerfisher.org",
          "username":"arozam",
          "created_at":"2016-01-01",
        },
        {
          "first_name":"Basante",
          "last_name":"Maronza",
          "email":"maronza@somewhere.org",
          "username":"maronza",
          "created_at":"2016-01-01",
        }
      ]
      
    }
  }
]);
