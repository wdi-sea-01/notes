#Functions
* Define a method
* Define a method with a parameter
* Define a method that operates on two parameters
* Printing and returning are different
* Return value
* Functions can have scoped variables

##Defining a Method
```
var greeting = function() {
console.log("Hello World");
}

greeting();
```

##Defining a method with a parameter
```
var greeting = function (taco) {
  // anything inside of here will execute when called
  console.log("Good morning", taco);
}

var name = "Delmer"
var name2 = "Anil"
greeting(name);
greeting(name2);
```



##Defining a method with two parameter
```
var greeting = function (taco, stuff) {
  // anything inside of here will execute when called
  console.log("Good morning", stuff, taco);
  console.log("taco:", taco);
  console.log("stuff:", stuff);
}

var name = "Delmer"
var name2 = "Anil"
greeting(name, name2);
greeting(name2, name);
```

##Printing and returning are diffrent
```
var multiply = function(num1, num2) {
  console.log("inside the function");
  // return result = num1 * num2;
  return num1 * num2
}

var firstNum = 2;
var secNum = 3;
var taco = multiply(firstNum,secNum);

console.log(firstNum + " multiplied by " + secNum + " is " + taco )
```
```
// With a return value
var returnHello = function (name) {
  return("Hello, " + name)
}

console.log("with a return value:", returnHello("tim") );

// Without a return value
var returnHello2 = function(name) {
  console.log("inside returnHello2: Hello, " + name);
}
returnHello2("nachos");
console.log("without a return value:", returnHello2("taco") ); //will show as undefined
```
