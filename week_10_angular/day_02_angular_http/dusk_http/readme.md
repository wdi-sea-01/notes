#Angular $http

##$http
We can use the `$http` provider to request data from an external source. Just like Jquery's AJAX, we can use this.

There is dependency injection that can happen on the module layer, or controller layer.

If you wanted to fetch JSON data in your angular app, you want to include the built in `$http` controller, include it as a dependency on the controller you wanted to use it in.


```javascript
var moviesApp = angular.module('MoviesApp', [])


moviesApp.controller('SearchController', ['$scope','$http', function($scope, $http) {


}]);
```

We will do this in two steps. Define a search object that contains different types of parameters.

The second part will be the actual request. Remember this request is asynchronous, and we will need to use `.success` callback to retrieve that data. Similar to how we did in node.

```javascript
$scope.search = function() {

  var req = {
    url: "http://www.omdbapi.com",
    params: {
      s: $scope.searchTerm,
    }
  }

  $http(req).success(function(data) {
		//DO something with data here
		//$scope.movies = data
    }
  });

}

```


we can add a `ng-click` on something to trigger it

```
<button ng-click="search()">
```