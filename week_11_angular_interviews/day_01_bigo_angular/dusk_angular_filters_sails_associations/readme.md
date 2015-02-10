#Angular filters & Sails Associations

##Sails Associations

Sails associations are extremely simple and well documented so there really isn't much to add

[Sails associations one to many](http://sailsjs.org/#/documentation/concepts/ORM/Associations/OnetoMany.html) (links in sidebar)


##Angular Filters

Angular includes a few built in filters to help you with displaying your data.

Using filters in your view is done by using a `|` symbol inside of the "double-stache"

`{{ variable | filterName }}`

They can also be chained together much like commands in bash the result of each filter will be pased in to the next one.

`{{variable | filterOne | filterTwo }}`

Filters can also take parameters which are separated by colons. The above code would limit the lenght of a string and then convert it to lowercase.

`{{myScopeVariable | limitTo:20 | lowercase}}`

Multiple parameters are separated by multiple colons. Here is an example of th [currency filter](https://docs.angularjs.org/api/ng/filter/currency) which takes 2 optional parameters (symbol and decimal places).

in controller:

```javascript
$scope.price = 89402.54321
```

in html

```html
{{price | currency:'£':3}}
```
Output: £89,402.543

More information about using Angular fitlers: 
[Angular filter documentation](https://docs.angularjs.org/api/ng/filter/filter)

List of available built-in filters: [Angular filters list](https://docs.angularjs.org/api/ng/filter)


##Creating Custom Filters

Creating custom filters in angular is fairly simple and is well covered in the [Official angular filter tutorial](https://docs.angularjs.org/tutorial/step_09).

The basic pattern is just using `.filter` on your angular app and pass in a name as a string and a function (much like defining a controller or directive).

The difference is that your function will return a function (which is the actual filter function that will be called on your view). 

The filter function that you return must take at least 1 parameter (the input to be filtered). Additional parameter can be passed in using colons in the view.

```javascript
//basic filter template (does nothing)
myApp.filter('filterName',function(){
    return function(input){
        //do something to input
        return input;
    }
});
```

####Reverse string

```javascript
//reverse filter reverses a string
myApp.filter('reverse',function(){
    return function(input){
        return input.split('').reverse().join('');
    }
});
```

**Usage**

```
{{myVar | reverse}}
```

If we set `$scope.myVar="Hello"` in our controller the above would output "olleH".

####Limit words

```
    myBlogApp.filter('wordLimit', function(){
        return function(input, limit){
            if(!input) return '';
            var words = input.split(' ');
            if(words.length <= limit){
                return input;
            }else{
                words.splice(limit);
                return words.join(' ')+'...';
            }
        }
    });
```

**Usage**

```
{{someWords | wordLimit:50}}
```

Outputs `someWords` after limiting it to 50 words and appending "..." to the end.
