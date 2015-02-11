#Communication between controlelrs

##rootScope

A quick and **dirty** way to enable communication between controllers is to use the rootScope. rootScope is just like scope except that it is isolated at the app (module) level instead of at the controller level. This means that the rootScope value in each controller will be the same and it can be used outside of a controller.

In the .js file it is injected as `$rootScope` and used the same way you use `$scope`.

In the view (.html) it is just called `$root`. Why the inconsistency? I don't know.

**Example**

```javascript
myApp.controller('MyCtrl',['$rootScope',function($rootScope){
    $rootScope.greeting="Hello";
}]);
```

```html
<div ng-app="MyApp">
    {{$root.greeeting}} world!
    
    <div ng-controller="MyCtrl">
        {{$root.greeeting}} world!
    </div>
    
    <div ng-controller="OtherCtrl">
        {{$root.greeeting}} world!
    </div>    
</div>
```

All three places above the app would output "Hello" for `$root.greeting`.


##Services

Services in angular are used to wrap common tasks that need to be performed in multiple controllers and can also be used to allow controllers to communicate.

Services are singletons by design which means that they are only initialized once. Each subsequent initialization loads the previously initialized instance. This means that data is preserved.

To create services in angular we use the `.factory` method on our app. Like controllers, etc it takes 2 parameters. A string to define the name of the service and a function. Like a controller the array is placed inside of an array of dependency injections.

Below is a simple service that keeps track of a count and can be reused by different controllers.

```javascript
myApp.factory('CountService',[function(){
    var count=0;
    return {
        increment:function(){
            count+=1;
        },
        getCount:function(){
            return count;
        }
    }
}]);
```

```javascript
myApp.controller('myCtrl',['CountService',function(CountService){
    //increases count by 1 each time myCtrl loads
    CountService.increment();
}]);

myApp.controller('myOtherCtrl',['CountService',function(CountService){
    //increases count by 1 each time myOtherCtrl loads
    CountService.increment();
}]);
```

In the above example every time either of the controllers is loaded it increments the count variable in the CountService. If there were 5 instances of each controller on the page (10 total) either could call `CountService.getCount()` and receive the number 10.

More info about services: [Angular service documentation](https://docs.angularjs.org/guide/services)

##Alternative Services

You can also define a service using `.service()` however it is undocumented which to implies that maybe the makers of angular prefer if you use `.factory()` to create services.

The main difference is that with `.service()` the service is inilized as a constructor using the new keyword. That means that it cannot return a value and we have to define variables / functions using the `this` keyword.

####Example

This is the same as the `.factory` count service above but created using `.service`.

```javascript
myApp.service('CountService',[function(){
    this.count=0;
    this.increment=function(){
        this.count+=1;
    }
    this.getCount=function(){
        return this.count;
    }
}]);
```
