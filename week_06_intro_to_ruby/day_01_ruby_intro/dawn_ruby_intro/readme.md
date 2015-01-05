#Intro to Ruby



##Humble Origins
Ruby is an object-oriented language suitable for writing day to day scripts as well as full-scale applications. Matz began work on Ruby back in 1993, because he wanted a language that made him productive while being fun to use. Initially popular in Japan, Ruby has been finding its way into the hearts of programmers all over the world.

* Ruby stylistically conforms to the **snake_case** convention
* The [documentation](http://ruby-doc.org/) is fantastic

Further reading: [The Philosophy of Ruby](http://www.artima.com/intv/ruby.html)
###Yukihiro Matsumoto
![Matz-san](http://image.gihyo.co.jp/assets/images/dev/serial/01/software_designers/0034/0034-01.JPG "Yukihiro Matsumoto")

##Core Language Components
* Objects
* Classes
* Primatives
* Operators
* Conditionals
* Enumarables (aka Iterators)
* Methods (aka Messages)

##Data Types

###Nothingness
Just as Javascript uses undefined or null, ruby uses **nil**

```
anUndefinedVariable == nil
=> true
```

###Booleans
A bianary representation: either **true** or **false**

###Integers
A primative datatype used to represent a number
* Fixnum
* Float	
* Bignum

*conceptualize how an integer inherits it's properties*
	
```
1.class.superclass
=> Integer
```
###Strings
A primative datatype used to represent a string of characters

*inspect a string's methods*

```
String.instance_methods(false).sort
```

###Arrays
An indexed arrangemnet of objects
*show several ways to create an array*
	
```
arr = [1,2,3]
=> [1,2,3]
arr1 = Array.new([4,5,6])
=> [4,5,6]
arr2 = Array.new(3, true)
=> [true, true, true]
```
	
###Ranges
A set of values with a beginning and an end

```
aRange = (1..10) # includes 10
anotherRange = (1...10) # not including 10
lettersWorkToo = ('a'..'z')
```

*typecasting in action*

```
rang1.to_a
=> [1,2,3,4,5,6,7,8,9]
```

###Symbols
An immutable sequence of characters that represents data stored in a specific memory location.

```
country = :turkey
food = :turkey

country.object_id == food.object_id
=> true

country = "turkey"
food = "turkey"

country.object_id == food.object_id
=> false
```

###Hashes
A hash consists of unindexed key, value pairs. You may construct a hash in either of the following ways.

```
dog = {
	:name => "Hamlet",
	:breed => "Pug",
	:fav_food => "paté"
}
cat = {
	name: "Simba",
	breed: "American Shorthair",
	fav_food: "Prosciutto"
}
dog[:name]
=> "Hamlet"
cat[:fav_food]
=> "Prosciutto"
```

##Operators
###Comparators
* `+`, `-`, `/`, `*`, `**`

* `+=`, `-=`, `*=`, `/=`, `**=`

* `==`, `.equal?`, `!`, `||`, `&&`, `||=`
	* a ||= b is equivalent to a || a = b

###General Delimated Input
Syntactical alternatives for representing datatypes. 

* `%q{a normal "string"}`, `%w{a word array}`

###Mutator methods !
Mutator methods will not just return a value, but change the object they are called on to that value. Adding ! to certain ruby methods will turn them into their mutator method counterparts.

*How to mutate an array*

```
arr = [7,4,5]
arr.sort #not a mutator method
=> [4,5,7]
arr
=> [7,4,5]

arr = [7,4,5]
arr.sort! #the '!', aka a 'bang' will mutate the object
=> [4,5,7]
arr
=> [4,5,7]
```

###Typecasting
Typecasting is the act of altering an object's datatype

* .to_i
* .to_s
* .to_a
* .to_f

##Conditionals
* `if`, `unless`, `else`, `while`, `until`, `when`

##Code blocks
Sometimes called closures in other languages is a chunk of contained code. Use curly braces, `{ }` for single line blocks and `do ... end` for multiline blocks.

```
5.times { puts "Hello" }

x = 0
until x > 10 do	#count to 10
	puts x
	x += 1
end


```

##String Interpolation
Allows one to inlcude a dynamic variable in a string

```
team = "Giants"
puts "Go #{team}!"
=> "Go Giants!"
```
`
