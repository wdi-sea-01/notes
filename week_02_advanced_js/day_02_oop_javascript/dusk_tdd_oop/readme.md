#TDD / OOP

##Test Driven Development

Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards. - [wiki](http://en.wikipedia.org/wiki/Test-driven_development)

### Process
1. Create / receive feature specification
* Create test
* Run tests (new test should fail)
* Write code to try to make the test pass
* Run tests (if fail return to step 4)
* Refactor code if needed

### Node.js Example
There are many testing frameworks, but just to get started we will look at Node's built in "Assert" function.

Assert has many methods but we are going to look at strictEqual in this example. [See assert documentation](http://nodejs.org/api/assert.html) for more options.

To use the assert plugin we must first require it as follows.

```
var assert = require('assert');
```

This loads `assert` and allows us to reference the methods attached to it. So to use the strictEqual method we simply call assert.strictEqual() which has 3 parameters.

* actual - the value you want to check
* expected - what we expext that value to be
* message - the message to output if it is not what we expect.

here is an example to check a simple `sum` function.

```
var sum = function(num1,num2){
}

assert.strictEqual(sum(1,1),2,'1+1 should equal 2.');

```
Using the TDD process we would start our code like this and execute it before making the sum function actually adding the code in the sum function. This is done to test our test. It should fail until we create the correct code.


##Object Oriented Programming

Object-oriented programming (OOP) is a programming paradigm based on the concept of "objects", which are data structures that contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods. A distinguishing feature of objects is that an object's procedures can access and often modify the data fields of the object with which they are associated (objects have a notion of "this"). In object-oriented programming, computer programs are designed by making them out of objects that interact with one another. - [wiki](http://en.wikipedia.org/wiki/Object-oriented_programming)

##Javascript Constructors

Before we examine constructors, let's review. There are a few different ways to create objects.

**Object Literal Notation**

```
// Object Literal notation uses `var` and `:`
var instructor = {
  name: "Elie",
  age: 26
};

// Or (notice the use of the keyword "new")
var instructor = new Object();

instructor.name = "Elie";
instructor.age = 26;
```

## Intro to Classes and Constructors

Imagine you're an architect and you're tasked with designing a blueprint for a house (which will be used to build 25 similar looking houses). If we assume that every house has a number of square feet, bathrooms and bedrooms we can model this with a few objects.

```
var house1 = {
  sqFeet: 3000,
  bathrooms: 3
  bedrooms: 2
}
var house2 = {
  sqFeet: 4000,
  bathrooms: 3.5
  bedrooms: 2
}
var house3 = {
  sqFeet: 1000,
  bathrooms: 2
  bedrooms: 1
}
var house4 = {
  sqFeet: 13000,
  bathrooms: 3.5
  bedrooms: 7
}
```

Unfortunately, this is not very efficient. We've created 4 houses and already it's taken almost 20 lines of code. Fortunately we can create a class as our "blueprint" and then create objects based off of that. To create a class in JavaScript, we can use a constructor function.

###Constructor Notation

We can use a constructor function to create multiple objects that share the same properties.

Using our previous example we create a constructor function like this:

```
function House(sqFeet, bathrooms, bedrooms) {
  this.sqFeet = sqFeet;
  this.bathrooms = bathrooms;
  this.bedrooms = bedrooms;
}
```

Notice our use of the keyword `this`. Since we don't know what the value for the parameters will be, we use `this` as a placeholder and when we call this function, we add in our values. To create an object using a constructor function, we use the `new` keyword. Here is an example of how we would create our four houses using a constructor function and the `new` keyword:

```
var house1 = new House(3000, 3, 2)
var house2 = new House(4000, 3.5, 2)
var house3 = new House(1000, 2, 1)
var house4 = new House(13000, 3.5, 7)
```

Let's look at another example and a different way to write a constructor function.

```
var Person = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return ("Hello" + firstName + " " + lastName)
  }
}

// This can also be written as:

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return ("Hello" + firstName + " " + lastName)
  }
}
```

What's the difference between these two? In short, The difference is that `var Person = function(){}` is defined at run-time (which means that if we were to call it before defining it we would get an error), whereas `function Person(){}` is defined at parse-time (which means that if we were to call it before defining it we would __not__ get an error). 

You can read more about the difference [here](http://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname)

Let's now take a look

```
var elie = new Person("Elie", "Schoppik");

console.log(elie.firstName);
console.log(elie.lastName);
console.log(elie.fullName());
```

Using the `new` keyword, Javascript does a few things.

 * Creates a new object
 * Sets the `constructor` property to the object Person
 You can use x.constructor to get a direct reference to the object, but it's an anonymous function so there's no way of getting its name.

### Pitfalls

* When using the constructor, don't try to call a constructor without the `new` keyword.

* Always make sure the keyword `this` is on the left hand side: `this.taco = taco`

* `return` statements in a constructor does not do anything


## Prototypes

One of the more complex concepts in JavaScript to wrap your head around is the idea of a Prototype. You can think of a Prototype as the building block for your object (and remember that everything in JavaScript is an object). For any object you create, you can attach methods and properties to it's prototype. So in our constructor functions, we can attach methods and properties to the prototype so that every object we create from it will have these properties and methods! 

But wait a second....how is the prototype different than just adding a method to the constructor function? Let's examine these two pieces of code

* Attaching a method to the constructor function:

```
function Person(name){
	this.name = name
	this.sayHi = function(){
		alert("Hi " + this.name)
	}
}

var elie = new Person("Elie")
elie.sayHi()
```

* Attaching a method to the prototype:
 
```
function Person(name){
	this.name = name
}

Person.prototype.sayHi = function() {
	alert("Hi " + this.name)
}

var elie = new Person("Elie")
elie.sayHi()
```

So...these both work, but how are they different, and which one is better? The answer is the second one, here's why:

* When we attach methods to the constructor function, these methods are written each time a new instance of the object is created, which is a waste of memory. By attaching the method to the prototype, we only have to declare it once. The example version saves memory because there is only one instance of the function instead of a separate function for each object.

Let's now take this a step further - how is it that an Array has the methods (length, map, forEach and so many more)? How does every object have a toString() or hasOwnProperty method? The answer is, that these methods are part of that object's Prototype. Even further, Objects can inherit properties and methods from other objects (that's how the Boolean and Number object have the toString() method.) - the answer to this question will be explored more when we discuss inheritance.