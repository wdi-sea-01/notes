#Creating custom directives


##Create a module

Generally your directive(s) will be contained within a seprate module to keep them organized.

```javascript
angular.module('image-toggle',[])
```


##Add a directive

A directve is initlized by creating a function that returns an object literal.

```javascript
angular.module('image-toggle',[])
.directive('imageToggle', function(){ 
    return {
    //directive settings go here
    }
});
```

For details on how to initlize the directive see the [Angular Directives Docs](https://docs.angularjs.org/guide/directive) and the finished directive `image-toggle.js` which is included in this repository.


####image-toggle directive usage

**minimal**

```html
<image-toggle on="images/on-image.jpg" off="images/off-image.jpg"></image-toggle>
```

**with state**

```html
<image-toggle state="imageState" on="images/on-image.jpg" off="images/off-image.jpg"></image-toggle>
```

Setting state to imageState (could be called anything) links the state of the `image-toggle` to `$scope.imageState` in the controller.
