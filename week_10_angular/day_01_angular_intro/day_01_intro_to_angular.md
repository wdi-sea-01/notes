##Angular

Objective - Understand the following...
* Loading Angular / CDN
* Creating a module
* Loading a module (ng-app)
* Creating a controller
* Loading a controller (ng-controller)
* Controller scope
* Two-way data binding with ng-model
* Dynamic classes (ng-class)
* Hiding elements (ng-if, ng-hide, ng-show)
* Listing items (ng-repeat)
* Handling user events (ng-click)


[Angular documentation](https://docs.angularjs.org/api?PHPSESSID=cae8e98e7ca559b4605d75c813b358ee)

##Basic Angular Setup

To create an angular app first you need to load the `angular.js` file by downloading it or linking it from [a cdn](https://www.google.com/search?q=angular+cdn).

Once the angular library is loaded you need to create an app (module) and load it in to your page.

##Create Angular app

If angular is loaded correctly this should give you the message "the app has started" in your javascript console.


####Define an Angular module
```javascript
var myApp = angular.module('TacoApp',[]);

myApp.run(function(){
    console.log('The app has started.');
});
```

####Load angular app on a page

```html
<body ng-app="TacoApp">
<!-- page content here -->
</body>
```

##Create an Angular controller

Pretty much everything you do in Angular will depend on a controller. You can add a controller to your module using the `controller` method which takes 2 parameters.

* Name of the controller
* An array containing the Initialization function for this controller.

```javascript
myApp.controller('TacoBuilder',[function(){
    console.log('TacoBuilder controller has started.');
}]);
```

####Load the controller on a page

Controllers can be attached to DOM elements using the `ng-controller` directive.

```html
<div ng-controller="TacoBuilder"></div>
```

##Scope

The scope (represented in Angular as `$scope`) is where you will store all of your data in a controller. Any data stored in the scope will be available in the view within the DOM object that has the `ng-controller` directive.

####Dependency Injection

To access the `$scope` object we need to inject it as a dependency. This is done by including it as a string in the array before the function AND defining it as a paremeter within the function.

You can load as many dependencies as you want, but it is vital that the strings in the array are in the same order as the parameter in the function.

```javascript
myApp.controller('TacoBuilder',['$scope','$http',function($scope,$http){
}]);
```

In the above example we load `$scope` and `$http`. Notice the strings `$scope` and `$http` and the 2 parameters `$string` and `$http`. The strings tell it what to load and the parameters are how you access it within the function. You can technically name the parameters (in the function) whatever you want, but it's good practice to name them they same as the dependency that you are loading.

Side note: `$http` is the angular http (ajax) module. We'll learn about that later. It is just used above to demonstrate how to load multiple dependencies.


####Initializing scope

Once you load the `$scope` dependency you just use it like any other object. You can define whatever keys you want and assign them any value. the value will then be available in the view.

```javascript
myApp.controller('TacoBuilder',['$scope',function($scope){
    $scope.name = "Jane Doe";
}]);
```

Then you can reference the variable in the scope in the view like this:

```html
Hello, {{name}}
```

##Two-way data binding

Angular uses two-way data binding. This means that if any data in `$scope` is changed in the controller it is reflected in the view automatically AND if the data is changed in the view it is updated in the controller.

####ng-model

The easiest way to achieve this is using the `ng-model` directive. `ng-model` can be used on any form element and creates a two-way data binding to the value of the `$scope` key specified.

Expanding on the example above (same controller code) you can do the following...

```html
Hello, {{name}}
<input type="text" ng-model="name">
```

Now if the user types in the input box it will update `$scope.name` in the controller which also means the `{{name}}` will be updated to match.

##Dynamic classes (ng-class)

Most html fields have an `ng-` version that is dynamically bound to the `$scope`. You can use `ng-class` to dynamically change the class based on a value of the `$scope`.

There are two ways to do this. You can specify a variable to be passed in as a string from the controller OR you can specify an object and each key will be added as classes if the associated value is truthy.

You can also use this in conjuction with the regular `class` parameter for things that will always be included (see class="btn" below)

```html
<div ng-class="myClassName">something.</div>
<button class="btn" ng-class="{'btn-primary':primary,'btn-xs':small}">Do it</button>
```

```javascript
//inside of controller
$scope.myClassName="well";
$scope.primary=true;
$scope.small=true;
```

##Hiding elements (ng-if, ng-hide, ng-show)

There are 3 ways to show and hide elements. All three take a boolean value (from the `$scope`) to determine if the DOM element should be visible or not.


* `ng-show` - Shows the item if the value is truthy. Hides it if it's falsey
* `ng-hide` - The exact inverse of ng-show
* `ng-if` - Works like ng-show, but completely removes the element from the DOM if ng-if is falsey.

```html
<div ng-show="happy">I am happy</div>
<div ng-hide="happy">I am sad</div>
```

```javascript
//inside controller
$scope.happy = true;
```

##Listing items (ng-repeat)

```html
<ul>
    <li ng-repeat="person in people">{{person}}</li>
</ul>
```

```javascript
//inside controller
$scope.people=['jane','john','jenny','jerry','james','jimmy','jess']
```

##Handling user events

Angular can also handle user events using directives including `ng-click`, `ng-keyup`, `ng-keydown`, etc...

####ng-click

To detect a click event we use the `ng-click` directive and give it a function to call when the user clicks. This function is attached to the `$scope` just like a value.

```javascript
$scope.toggleHappy=function(){
    $scope.happy = !$scope.happy;
}
```

```html
<button ng-click="toggleHappy()">Toggle Happy</button>
```

clicking the button will cause happy to switch `$scope.happy` true to false.

Alternatively, you can put any code directly in the `ng-click`, but it is generally smart to use functions instead. However, for a simple 1-liner like this it is probably ok.

```html
<button ng-click="happy = !happy;">Toggle Happy</button>
```

Notice that in the controller it is `$scope.happy`, but in the view (html) it is just `happy` (without `$scope`).