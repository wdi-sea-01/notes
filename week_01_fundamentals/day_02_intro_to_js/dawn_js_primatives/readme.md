# Javascript Primitives

## Intro to Programming fundamentals
* History of Javascript
* Comments
* Understand Data Types
  * Numbers
  * Strings
  * Booleans
  * Values & Expressions
  * Variables
  * Objects everywhere
  * Collections
    * Arrays
    * Objects
  * Reference Types
  * Undefined
  * False
  * Javascript Object Literal


## Comments

Comments come in two forms

  * line comments

   ```
   // descriptive stuff
   ```
  * multiline comments

  ```
  /**
    These
    are
    comments on
    many lines
  */

  ```
## Numbers

Numbers are one of the *types* of **values** we want to be able to interact and play with in JS.

* Integers

  ```
   ..., -1,0, 2, 3, 4, 5, ...
  ```
* Floats (or Decimal numbers)

  ```
   2.718, 3.14, .5, .25, etc
  ```

In JS these are the same **type** of object, which it calls *Numbers*, so if you know floats and integers don not go looking for them.

## Strings

Strings are collections of letters and symbols known as **Characters**, and we use them to deal with words and text in Javascript. Strings are just another type of **value** in Javascript.

```
"John", "Jane"
```

## Booleans

Strings are a type that can only have one of two values: true or false.

```
true
false
```

## Values and Expressions

Types of values like `Number` or `String` are not very useful without being able to form **Expressions** or **Combinations**.

Try your favorite number operators

```
  1 + 1
  => 2
  2 - 1
  => 1
```
You can also create expressions with strings using addition

```
  "Hello, " + "world!"
  => "Hello, world!"
```

This is called **String Concatentation.**


### Special Number Operators

Javascript can be a little cheap with the number of operations it allows you to do. For example, how is someone supposed to square a number or cube a number easily? Luckily there is a special `Math` object with some very useful methods.

* Taking a number to some `power`? Then just use `Math.pow`

```
// 3^2 becomes
Math.pow(3,2)
=> 4
// 2^4 becomes
Math.pow(2,4)
=> 16
```
* Taking a square root

```
// √(4) becomes
Math.sqrt(4)
=> 2
```
* Need a `random` number? Then use `Math.random`.

```
// The following only returns a random decimal
Math.random()
=> .229375290430
/**
  The following will return a
  random number between 0 and 10
*/
Math.random()*10
```

* Since Numbers can be **Floats** or **Integers** we often want to get rid of remaining decimal places, which can be done using `Math.floor`.

```
// Remove the decimal
Math.floor(3.14)
=> 3
Math.floor(3.9999)
=> 3
```

## Variables

Having made some expressions it becomes evident we want to store these values.

```
var myNumber = 1;
// or also

var myString = "Greetings y'all!"
```

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`


## Objects Everywhere

In Javascript we just discussed two types of values we can use. We call these values objects, which for now just means that in addition to storing some data you also get to use some helpful methods when you are working with them.

* If you want to turn a number into a string you can use a helpful method called `toString`.

```
myNumber.toString()
=> "1"
```


### Common String / Number methods

* Numbers
  * `.toString`, `.toFixed`
* Strings
  * `.split`, `.join`, `.indexOf`, `.toUpperCase`, `.toLowerCase`, `.replace`
  


### Arrays

Unfortunately, strings and numbers are not enough for most programming purposes.
What is needed are collections of data that we can use efficiently, Arrays.

Arrays are great for:

* Storing data
* Enumerating data, i.e. using an index to find them.
* Quickly reordering data

```
var friends = ['Moe', 'Larry', 'Curly'];
=> ['Moe', 'Larry', 'Curly']
```

Items in an array are stored in sequential order, and indexed starting at `0` and ending at `length - 1`.

```
// First friend
var firstFriend = friends[0];
 => 'Moe'
// Get the last friend
var lastFriend = friends[2]
=> 'Curly'
```

### Objects

Why use objects to store `key` and `value` pairs? They are like arrays except that  data is not stored in any sorted order and keys do not have to numbered indexes.


#### creating


```
var friend = {firstName: "Jane", lastName: "Doe"}

```

#### accessing


```
friend.firstName
friend.lastName

friend['firstName']
friend['lastName']
```

### Exercise


1.) How would you represent the following using and object literal. Then update `john's` address to `1234 Park ln`.

````

John, Doe, 36, 1234 Park st.

````
**(Hint: think in terms of firstname, lastname, age, address)**


2.) Using a combination of Objects and Array, how would you represent the following:


```
  Moe, Doe, 31, 1234 Park st.
  Larry, Doe, 36, 1234 Spark st.
  Curly, Doe, 36, 1239 Park st.
  Jane, Doe, 32, 1239 Spark st.
  Emma, Doe, 34, 1235 Spark st.
  Elizabeth, Doe, 36, 1234 Park st.
  Elinor, Doe, 35, 1230 Park st.
  Mary, Doe, 31, 1231 Park st.
  Darcy, Doe, 32, 1224 Park st.
  Grey, Doe, 34, 1214 Park st.
  Lydia, Doe, 30, 1294 Park st.
  Harriet, Doe, 32, 1324 Park st.

```

### Array Methods

`.pop`, `.push`, `.shift`, `.unshift`, `.concat`, `.slice`, `splice`, `.reverse`


### Reference

[Values, variables, and literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Values,_variables,_and_literals)

[re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)











