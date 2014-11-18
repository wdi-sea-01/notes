JavaScript Control Flow
===================================

Control Flow
------------

Logical branching & repeating code.

1. [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
2. [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
3. [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
4. [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

### If ###

The **if statement** executes some code if a specified condition is true.

```
if (true) {
    console.log("this will be printed");
}
```

```
if (false) {
    console.log("this will not be printed");
}
```

```
var x = 4;
//var x = 5;
if (x === 5) {
    console.log("x equals 5");
}
```

__If / Else__

```
var isTasty;
var food = "vegetables";
//var food = "pizza";
if (food === "pizza") {
    isTasty = true;
} else {
    isTasty = false;
}
console.log("Is the food tasty?", isTasty);
```

__If / Else If / Else__

```
var course = "wdi";
if (course === "uxdi") {
    console.log("Hello, User Experience Designer!");
} else if (course === "fewd") {
    console.log("Hello, Front-End Developer");
} else if (course === "wdi") {
    console.log("Hello, Immersed Student")
} else {
    console.log("Who are you?")
}
```

### While ###

A **while loop** repeatedly executes some code as long as a specified
condition is true.

```
var i = 0;
while (i < 5) {
   console.log("i is " + i);
   i++;
}

// Will print out:
// >i is 0
// >i is 1
// >i is 2
// >i is 3
// >i is 4
```

### For ###

A **for loop** is a fancy **while loop**.

```
for (var i = 0; i < 5; i++) {
    console.log("i is " + i);
}

// Will _also_ print out:
// >i is 0
// >i is 1
// >i is 2
// >i is 3
// >i is 4
```

Very commonly, you will use it to loop through an array.

```
var foods = ["pizza", "tacos", "ice cream"];
for (var i = 0; i < foods.length; i++) {
    console.log("i like " + foods[i]);
}

// Will print out:
// >i like pizza
// >i like tacos
// >i like ice cream
```

### For...in ###

A **for...in** loop is similar to a **for loop**, but good for looping
through all the key-value pairs in an Object.

```
var car = {
   wheels: 4,
   doors: 2,
   seats: 5
};
for (var thing in car) {
    console.log("my car has " + car[thing] + " " + thing);
}

// Will print out:
// > my car has 4 wheels
// > my car has 2 doors
// > my car has 5 seats
```

### Exercises ###

1. Implement [Fizz Buzz](http://en.wikipedia.org/wiki/Fizz_buzz). Loop
   from 1 to 100.  If the number is divible by both 3 and 5, print
   "fizzbuzz". Otherwise, if the number if divisible by 3, print
   "fizz", or, if the number is divisible by 5, print "buzz". If none
   of the above are true, print the number. This is a very common
   interview question!

2. Use a `for...in` loop to examine the `phoneBook` Object below and print
   out the names of all the people who share the phone number "333-333-3333".

```
var phoneBook = {
    "Abe": "111-111-1111",
    "Bob": "222-222-2222",
    "Cam": "333-333-3333",
    "Dan": "444-444-4444",
    "Ern": "555-555-5555",
    "Fry": "111-111-1111",
    "Gil": "222-222-2222",
    "Hal": "333-333-3333",
    "Ike": "444-444-4444",
    "Jim": "555-555-5555",
    "Kip": "111-111-1111",
    "Liv": "222-222-2222",
    "Mia": "333-333-3333",
    "Nik": "444-444-4444",
    "Oli": "555-555-5555",
    "Pam": "111-111-1111",
    "Qiq": "222-222-2222",
    "Rob": "333-333-3333",
    "Stu": "444-444-4444",
    "Tad": "555-555-5555",
    "Uwe": "111-111-1111",
    "Val": "222-222-2222",
    "Wil": "333-333-3333",
    "Xiu": "444-444-4444",
    "Yam": "555-555-5555",
    "Zed": "111-111-1111"
};
```

### Truthy vs. Falsey

What happens if we put something other than a Boolean as the conditional
in an **if statement**?

[http://james.padolsey.com/javascript/truthy-falsey/](http://james.padolsey.com/javascript/truthy-falsey/)

```
var person = null;
if (person) {
    console.log("this will not be printed");
} else {
    console.log("this will be printed");
}
```

```
var num = 0;
if (num) {
    console.log("this will not be printed");
} else {
    console.log("this will be printed");
}
```

```
var num = 5;
if (num) {
    console.log("this will be printed");
}
```

### Common Mistakes

1. Using the assignment operator(=) instead of the equality operator(===)
2. Infinite loops!