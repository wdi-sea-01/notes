#Finding data with SQL

##Getting Data 

If we want to find all items in a table we simply use `SELECT` like this:

```
SELECT * FROM books;
```
The * in the above comment means ALL so we want to show ALL columns. We can also specify columns like this:

```
SELECT title FROM books;
SELECT title,id FROM books;
```
This would give us ONLY the data in the title column. To do multiple columns we just separate them by commas

##Sorting

To sort the results we use the `ORDER BY` keyword. So if we wanted our list of books to be sorted by title we would do this

Ascending Order:

```
SELECT * FROM books ORDER BY title ASC;
```

Descending Order:

```
SELECT * FROM books ORDER BY title DESC;
```

##Filtering

We don't always want ALL the data so we use `WHERE` statements to tell SQL to only give us exactly the data we're looking for. If we wanted to search for books with the exact title "The Tell-Tale Heart" we would do this:

```
SELECT * FROM books WHERE title = 'The Tell-Tale Heart';
```

This is a case sensitive EXACT match so if the book was capitalized differently we might not have found it. For partial or non exact searches we use the `LIKE` keyword instead of the equal sign like this:

You can also use the `%` symbol as a wild card. So if I wanted all books containing the word "Tell" I could do this:

```
SELECT * FROM books WHERE title LIKE '%Tell%';
```
For case insensitive matching you use the `ILIKE` keyword.

```
SELECT * FROM books WHERE title = 'the tell-tale heart';
//no results because of the capital

SELECT * FROM books WHERE title ILIKE 'the tell-tale heart';
//returns the result because LIKE is case insensitive

SELECT * FROM books WHERE title ILIKE '%tell%';
//returns the result because LIKE is case insensitive

````


##Using multiple tables

In relational databases we often store different pieces of data in different tables. We can get data from multiple tables in a single query using the `JOIN` keyword. We have to tell it what table we want to join and what to use to link them together...

```
SELECT books.*, authors.first_name FROM books
JOIN authors ON books.author_id = authors.id;
```

**Lets break it down...**

`books.*, authors.first_name`

Tells the database to give us back all columns of the books table and just the first_name column of the authors table.

`JOIN authors`

Tells it that we want to use data from the authors table

`ON books.author_id = authors.id`

Tells it how the items are linked. So for each record it will give us the author data from the authors table that has an `id` that matches our `author_id` field.