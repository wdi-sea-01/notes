#Using ngAnimate

Angular supports animations on enter / leave and move. This is achieved by loading the ngAnimate module which will automatically add the ng-enter/ng-leave classes to your object when it is added/removed.

##Getting started

Read the [ngAnimate Documentation](https://docs.angularjs.org/api/ngAnimate)

Load `angular-animate.min.js` from the [angular.js cdn](http://cdnjs.com/libraries/angular.js/) using a `<script>` tag.

Inject the `ngAnimate` dependency into your module.

```javascript
var app = angular.module('MyAppName',['ngAnimate'])
```

##Defining an animation class

To add an animation to an item simply add a class to that item and define a css animation that requires the item to have both your custom class and ng-enter/ng-leave.

```
.myclass.ng-enter{
    /* animation css here */
}

.myclass.ng-leave{
    /* animation css here */
}
```

**Note:** ng-enter/ng-leave will only be added to items as they are manipulated using ng-repeat, ng-show, ng-hide, ng-if, etc...