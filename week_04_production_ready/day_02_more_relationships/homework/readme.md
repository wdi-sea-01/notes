#Sequelize Associations Lab

Today you're going to add a new feature to your movie database app. It's up to you which of the two features listed below you want to add.

It is highly recommended that you create a branch before adding this feature (see bottom of this document for a git branch recap).

**Important note** the routes, table names, column / attribute names, etc could (probably will) be different in your project depending on how you named your other models / attributes / routes.

**Bonus (if you don't like sleeping)** DO BOTH!!!!!11


##1.) Comments - easier (one to many)

* **Modify watch list page**
	* Add a "comments" button next to each item in the list
	* Comments button links to a new page
* **Create comments page**
	* Lists all comments for a specific post
	* Takes 1 url parameter (watch list item id)
	* Has a form to add a comment associated to that watch list item
	* Recommended route: /watchlist/:id/comments
* **Create comments table**
	* attributes (columns):
		* comment text
		* id to reference watch list item
	* associate to watch list items
		* watch list item HAS MANY comments
		* comment BELONGS TO one watch list item



**Bonus** have the comments button on the watch list page display the number of comments each watch list item has (look in to sequelize eager loading).


##2.) Tags - harder (many to many)

Create a tags page

* **Modify watch list page**
	* Add an "add tag button" to each entry on the watch page
		* links a form where the user can type a tag
		* findOrCreate the tag and associate it to the approporiate watch list item
* **Create Tag page**
	* Lists all tags in the tags table 
	* Tags should be clickable and link to the watch list page, but filter the list by movies that have been tagged with that tag.
* **Create Tags table**
	* attributes (columns):
		* tag
	* associate to watch list items
		* tag HAS MANY watch list items
		* watch list item HAS MANY tags
* **Create join table**
	* attributes (columns):
		* tag id
		* watch list item id

**Bonus 1** sort the tag list by popularity

**Bonus 2 (you're not gonna do this)** create a tag cloud where the tags font is larger depending on how popular it is


##Branches

Before adding this feature you should create a new branch. Here are the basic branch commands.

**List all branches**

```
git branch
```

**Switch to a branch**

```
git checkout <branch_name>
```

**Create a new branch**

```
git checkout -b <branch_name>
```

##Branch Example

**Command**

```
git branches
```

**Output**

```
* master
```

(we have one branch called master... the default)

**Command**

```
git checkout -b add_tags_to_watchlist
```

**Output**

```
Switched to a new branch 'add_tags_to_watchlist'
```

(we now created a new branch and are working within it)

**Command**

```
git branch
```

**Output**

```
* add_tags_to_watchlist
  master
```

(shows we have 2 branches and are currently in add_tags_to_watchlist)


**Command**

```
git checkout master
```

**Output**

```
Switched to branch 'master'
```

(we are now back in the master branch)

**Command**

```
git checkout add_tags_to_watchlist
```

**Output**

```
Switched to branch 'add_tags_to_watchlist'
```

(we are now in the add_tags_to_watchlist branch)