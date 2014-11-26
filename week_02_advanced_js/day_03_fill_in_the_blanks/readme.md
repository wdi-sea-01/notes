#Let's fill in the blanks

Today we'll cover some things to fill in the blanks and review / reinforce some of the concepts we've learned so far.

##Object.keys()

Object.keys is a helper function for use on objects. It returns an array of all of the keys.

```
var myObj = {'type':'person','name':'Jane','age':33};

console.log(Object.keys(myObj));
//outputs: ['type','name','age']

```


##Functions with optional parameters

Often functions need to support what are called `optional parameters`. If we want our basic sum() function to be able to accept 2 or 3 parameters we'd need to add a 3rd parameter that is optional.


```

console.log(sum(1,1));
//should output 2

console.log(sum(2,2,2));
//should output 6

``` 

We can further extend this concept by creating a sum function that can accept unlimited parameters. To do this we use the `arguments` object that is included in every function. The arguments variable is automatically created as a local variable in every function and is populated with all parameters that the function receives.

```
var sum = function(){
	console.log(arguments)
}

sum(3,2,6,1);

//outputs: { '0': 3, '1': 2, '2': 6, '3': 1 }
```

There are examples of each of the above in this repository in the `optionalParams` directory. A good real world example of a function that takes unlimited optional parameters is the [array splice() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).

##Functions review

Javascript uses [First-class functions](http://en.wikipedia.org/wiki/First-class_function). This means that a function can be passed around like any other item. It can be assigned to a variable just like a string, number, array, etc.

To execute a function it must have parenthesis after it.

```
var myFunc = function(){
	console.log('this code ran');
	return 5;
}

//runs the code
myFunc();

//doesnt run the code
myFunc;

console.log(myFunc());
//outputs: 5

console.log(myFunc);
//outputs: [Function]

```

Additionally, functions can be used to pass a chunk of code in to another function which can then execute that code.

```
var caps = function(string,callThis){
	callThis(string.toUpperCase());
}

var output = function(text){
	console.log(text);
}

caps("some lowercase string",output);
//outputs: "SOME LOWERCASE STRING"

//you can also pass a function inline like this

caps("some lowercase string",function(input){
	console.log("my caps'd string: " + input);
});
//outputs: "my caps'd string: SOME LOWERCASE STRING"
```

See example of this in the in the functions folder in this repo.
