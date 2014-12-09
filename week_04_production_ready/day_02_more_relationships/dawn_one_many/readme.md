#Sequelize - 1 to Many Relationship

Today we're going to cover how to setup a one to many relationship, using more than table.

Similar strategy can be used for storing information information about a particular user, or comments related to a blog post.

##Getting Started


* `npm init`

* `npm install --save express ejs  pg sequelize sequelize-cli`

* `createdb tabletop_development`

* `sqlize init`

Make sure to setup `config.json` with postgres settings.


##Creating A Model
There are a few things to remember when creating models. Models shall be lowercase and singular. Sequlize will automatically create plural tables when any migrations are run. Also id, createdAt, and updatedAt fields are given for you.

```
sqlize model:create --name author --attributes name:string
```

When creating a table that will reference another table, use the following format `parentId`, this format is necessary for some of built in methods of Sequelize.

```
sqlize model:create --name post --attributes title:string,content:text,authorId:integer
```

###Adding the Associations

The following lines need to be inserted into the author and post models respectively in the `associate` function. The comment line is where you will insert it.

Insert into `models/author.js`

* `models.author.hasMany(model.post)`

Insert into `models/post.js`

* `models.post.belongsTo(models.author)`


Finally, lets run `sqlize db:migrate` to create all the necessary tables from our models.


##Updated Sequelize Syntax

There were some recent changes in [Sequelize](https://github.com/sequelize/sequelize/wiki/Upgrading-to-2.0).

The main callback handlers to be used are `.then`, `.spread`, `.catch`, and `.finally`

Many have you have been using `.then` and they will continue to work.

###findOrCreate Example

Many crud options, will use a `.then` style promise. For the most part they function exactly have you been using them. The first parameter of the callback function will be data object.

In a common situation of finding first, then creating. `findOrCreate` is a useful method. If used with a `.then` you might find your self with your return object being an array. First value being the object, second value being a boolean indicating if the object was created.

Using the `.spread` method will let you use those array values as individual parameters in a similar syntax to what you were using earlier.


```
db.author.findOrCreate({where: {name: "Anil"}}).spread(function(author,created) {
  author.createPost({title: "taco"}).then(function(data) {
    // data.updateAttributes({ content: "burrito" });
  });
})
```
