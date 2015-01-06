# Intro to Classes
## Methods, Variables, and All That

Learning Objectives
====================
* Understand difference between objects and classes
* Understand how objects are referenced
* Understand getters and setters
* Understand `attr_writer`, `attr_reader`, `attr_accessor`
* Understand instance variables and instance methods
* Understand class variables and class methods
* Recall the `self` keyword
* Understand `Private`, and `Public` methods
* Understand method chaining in a class


======================


| OBJECTIVE |
| :---    |
| Identify principles of abstracting *data* into classes in ruby and to use instances of them to design a program.


We talked about methods earlier today and what we learned was a **procedural abstraction**. What we need to do is define a basic *interface* for our data that allows us to interact with it.

## Class Definition of a person

Let's create our first class.


`person.rb`

  class Person

  end


This defines a **class** definition of a `Person`. The *class* keyword denotes the *begining* of a class Definition.


To create a new *instance* of our *class* we write the following:

  > Person.new()

A particular instance of a *class* is a called an **object**. In general, languages that use *objects* as a primary means of *data abstraction* are said to be **Object Oriented Programming** (OOP) languages.


###  An Object By Any Other Name Is Just As Sweet

What is an **object** in ruby? Basically everything that isn't a keyword.

However, this can cause you some headaches if you're not careful.

Imagine we had the following

  > arr_1 = [1,2,3]
  > arr_2 = arr_1
  > arr_1 << 4
  => [1,2,3,4]
  > arr_2
  => [1,2,3,4]

Wow, the second array completely changed. That's because `arr_2` was a reference.
### Initialize and instance variables

In our class definition we can make use of an *initialize* method, which is run when a *new* instance of the class is created.

  class Person
    def initialize
      puts "A new person was created"
    end
  end


We can also make use of **instance variables** that are defined for each particular object and are available throughout other *methods* in the object. These variables    are prefixed by an *@* symbol, i.e. `@my_var`.

  class Person

    def initialize(name)
      @name = name
    end

    def greet
      puts "Hello! My name is #{@name}."
    end
  end


Now, when we create a new *Person* we are required to specify the `name` of the person.

  > person = Person.new("John")
  > person.greet
  => Hello! My name is John.

### Getters and Setters

Having created an *instance variable* in our object, we might want to *read* that *outside* our object. However, we have to define a method that will act as an **interface for reading** for this variable called a **Getter Method**.

  class Person

    def intialize(name)
      @name = name
    end

    def name
      @name
    end

    ...
  end

Now we can *read* or *get*  the *name* outside the object.

  > person = Person.new("Jane")
  > person.name
  => "Jane"

Similarly, we may need to *change* or *set* an instance variable from outside the object, so we create a method called a **setter method**.

  class Person

    def initialize(name)
      @name = name
    end

    def name
      @name
    end

    def name=(other)
      @name = other
    end
    ...
  end

We can now *get* and *set* the name of a person using the  methods we created for `@name`.

  > person  = Person.new("Samantha")
  > person.name
  => "Samantha"
  > person.name = "Sam"
  > person.name
  => "Sam"

### attr_reader, attr_writer, attr_accessor


In ruby, the practice of creating a *getter* method is so common there is a shorthand that can be used at the top of a class definition called `attr_reader`.

  class Person

    attr_reader :name

    def initailize(name)
      @name = name
    end

    def name=(other)
      @name = other
    end
    ...
  end


Similarly, we can do the same with the *setter* method using `attr_writer`

  class Person
    attr_reader :name
    attr_writer :name

    def initialize(name)
      @name = name
    end

    ...
  end

Moreover, we have a shorthand for telling our class to create both a *getter* and a *setter* method called *attr_accessor*.

  class Person

    attr_accessor :name

    def initialize(name)
      @name = name
    end
    ...
  end


### self, class methods, and  class_variables (@@)



Let's first create a variable associated with our class using the `@@var_name` designates a class variable. Then we can access it with a class method using `self.method_name`.

  class Person

    @@population = 0

    def initialize(name)
      @name = name
      @@population += 1
    end

    def self.population
      @@population
    end
  end


If we create a few new people we see the following

  > Person.new("John")
  > Person.new("Jane")
  > Person.population
  => 2

In most cases, inside an instance method, self refers to the Object, but when used in the context of a method name it refers to the *class* itself`.

You could also say

  class Person
    ...
    def Person.population
      @@population
    end
  end

but this has the unfortunate problem of rename each method when you rename the class.


Also, note that `self` can be used in instance methods to refer to particular *object* in use, i.e. `self.var_name` instead of `@var_name`.


### Private Methods


If we create a class `Person` with a name attribute and use `attr_accessor` to create the getters and setters as follows

  class Person
    attr_accessor :name

    def initialize(name)
      @name = name
    end
  end

then anyone can read and access `Person#name`.

  > person1 = Person.new("John")
  > person1.name
  => "John"

We can change this using the `private` keyword and passing it a symbol, which will privatize the corresponding methods.


  class Person
    attr_accessor :name

    def initialize(name)
      @name = name
    end

    private :name, :name=
  end

We can also add to the list of private methods by defining new methods below the `private` keyword

  class Person
    attr_accessor :name

    def initialize(name)
      @name = name
    end

    private
      def make_call
        puts "Calling friends"
      end
  end

or use a mixture of both

  class Person
    attr_accessor :name

    def initialize(name)
      @name = name
    end

    private :name=

    private
      def make_call
        puts "calling friends"
      end
  end


### Chainable methods

What if I wanted to create a class that had **chainable** methods calling many methods in one line.

  class Person

    def initialize(name)
      @name = name
    end

    def greet
      puts "Hello I am #{@name}."
      puts "What is your name?"
      @other = gets.chomp
      puts "Nice to meet you, #{@other}."
    end

    def thank
      puts "Thank you for coming."
    end

    def farewell
      puts "Farewell, #{@other}"
    end

  end


Trying to do

  > person1 = Person.new("john")
  > person1.greet.thank.farewell
  => nil has no method `thank`

to achieve this we have to return a reference to the object after each method

  class Person

    def initialize(name)
      @name = name
    end

    def greet
      puts "Hello I am #{@name}."
      puts "What is your name?"
      @other = gets.chomp
      puts "Nice to meet you, #{@other}."
      self
    end

    def thank
      puts "Thank you for coming."
      self
    end

    def farewell
      puts "Farewell, #{@other}"
      self
    end

  end
