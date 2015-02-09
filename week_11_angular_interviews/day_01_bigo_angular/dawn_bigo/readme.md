#Intro to Big O and Sorting Algorithms

>Algorithm - a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.


We already are aware that algorithms can be more efficient than others.

But in order to really know which ones are more efficient, we need it ot be somewhat quantifiable.

Big-O Notation is a way of mathematically determining that.
# Algorithmic Complexity: Big O

## Asymptotic Notation

Often in software engineering, we need to choose between algorithms and data structures which are suited to different tasks.  We need to analyze our own tasks, and the data we will be using, and make informed decisions about what tools to use.  Sometimes one tool is better in every way than another, but more often we have to sacrifice memory use for computation speed, or sacrifice speed of deletions to increase speed of insertions, and so on.

So What does it mean for an algorithm to be efficient? We can't measure in terms of seconds, because hardware and software are different across all machines. One program may run slower than another because of different software or because one machine is older than other - it's like comparing apples and oranges.

So how do we compare 2 algorithms regardless of hardware and software? We measure the asymptotic complexity of a program and a notation called big O. You can see the mathematical proof [here](http://en.wikipedia.org/wiki/Big_O_notation).

What this basically means is that big O measures how fast a program's runtime grows asymptotically - as the size of the inputs increase towards infinity, how does the runtime of your program grow?

Imagine counting the letters of a string and going one by one - This algorithm would run at a linear time, for each letter n you count n times, this is also known as O(n). The time to traverse a string is proportional to the number of characters.

Say O(n) is not fast enough? What if you already stored the length and then tried to find it again? You could run 1 calculation to find the length. This program would run equally fast on a 2 character string or a 1000 character string. Accessing a variable is an asymptotically constant time operation or O(1). The runtime does not change as the size of the inputs grow.



### Why do we care?

First, it is important that the algorithms used in our applications will behave well as the amount of data our application is operating on increases.  For instance, in the absence of indexing, a database feature , the ActiveRecord code `User.where(name: "Bob")` will take `O(n)` time.  This means that if the number of users in our database doubles, it will take twice as long to find Bob.  With indexing, this will take `O(log(n))` time, meaning that the amount of time used to find Bob will double if the number of users in our database is __squared__.  This is the difference between the app collapsing into a slow and unresponsive grave when the number of users gets to thousands and the app continuing calmly to a hundred thousand or a million users.

Second, you will get these sorts of questions in interviews.

![big O](http://www.daveperrett.com/images/articles/2010-12-07-comp-sci-101-big-o-notation/Time_Complexity.png)

### What this looks like numerically

|   Big O	| Operations for 10 "elements"  	| Operations for 100 "elements"  	|
|---	|---	|---	|
|  O(1) 	|  1 	| 1  	|
|  O(log n)	| 3 | 	7 	|
|   O(n)	| 10 |	100 |
| O(n log n) |	30 |	700 |
| O(n^2)	|100	|10000|
| O(2^n)	|1024	|2^100 (1.2676506e+30)|
| O(n!)	|3628800	|100! (9.332622e+157)	|

### Some Complexity Classes:
* O(1) - Constant time
   * Get the first value of a list
   * Random sample from a list
   
* O(log n) - Logarithmic Time (ex: Divide and Conquer searches)
   * Typical of algorithms that divide the input, then look at one of the sections
   * Searching sorted data

* O(n) - Linear Time, Examples:
   * Sum an array
   * Find the max of an unsorted array
   * Traversal of a list (a linked list or an array) with n elements;

* O(n log n) - Log-Linear Time (AKA "quasilinear")
  * Divide and pick a section for every piece of input
  * Sorting with quicksort, merge sort, or another  reasonably fast sort.

* O(n^2) - Quadratic Time, Examples:
	* Finding duplicates in an unsorted list of n elements 	(implemented with two nested loops).
  * Insertion Sort
  * Selection Sort
  * Bubble Sort
   
* O(2^n) - Exponential Time
  * When one new piece of data doubles the work, the formula is 2^n.
  * Naive Fibonacci (without pruning —— AKA, dynamic programming)

* O(n!) - Factorial Time
  * List all combinations of a set, every possible subset.  Impossibly slow and hardly ever needed.


## What is an algorithm?

A well defined, step by step computational procedure for solving a problem 

Algorithms are:

- Deterministic - they have a goal
	- They terminate as well 
- They take input
- They produce output

Just like in our explanation of data structures

## Some common sorting algorithms 

Below you will see four common sorting algorithms and some links to see them in action. One of the best ways to learn these algorithms is to try to implement them yourself. Use sticky notes, a pen and paper, cups, colored blocks or whatever you find best and try to recreate these sorting scenarios. Not only will this help you tremendously in your understanding of the algorithm, but it is __essential__ to have a fundamental knowledge before trying to implement them.

### Bubble Sort

For each element in the list, look at the element and the one to the right, if the left > right, swap them. Keep swapping until we are at the end of the array. Then move onto the next element in the array and repeat this. Bubble sort can be easily implemented using multiple loops (at least two) or recursion.

For bubble sort, The worst case is if we have backwards list (then it takes n passthroughs - 1)

![http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif](http://upload.wikimedia.org/wikipedia/commons/0/06/Bubble-sort.gif)

We know for sure that after 1 pass the right most element is sorted correctly, and after 2 passes the right 2 elements are sorted correctly

How can we make bubble sort even smarter? We can always count to see the number of swaps and if there are none we know it's sorted.

Bubble sort is NOT an efficient algorithm, it's worst case performance is O(n^2), because you have to make n iterations through a list checking all n elements each pass so n * n = n^2. This runtime means that as the number of elements sorted increase, the runtime increase quadratically. But efficiency isn't a major concern or if you are sorting a small number of elements, it's a great way to start.


### Quick Sort

![http://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Partition_example.svg/800px-Partition_example.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Partition_example.svg/800px-Partition_example.svg.png)

Select an element to be used as a pivot

Put all elements that are less than or equal to that element to the left.

Put all elements which are greater to its right.

Recursively call this method on the sublists.




## Merge Sort

Similar to quick sort, This is one of the most efficient ways of sorting an array. It has three steps, divide, conquer(sort) and then combine(merge). 

![http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif](http://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

And here is an example of the process

![http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif](http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/Gifs/mergeSort.gif)

