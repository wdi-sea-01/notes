## Getting started with Sequelize

## Key terms + definitions

#### ORM

An ORM (Object Relational Mapper) is a piece/layer of software that helps map objects to our database. This means we can just use JavaScript to create and work with our data instead of writing raw SQL queries (the concept is very similar to what we build with the weekend lab!)

You can read some more about the benefits of using an ORM [here](http://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it)

#### Sequelize

From the Sequelize docs "To put it in a nutshell, it's an ORM (Object-Relational-Mapper). The library is written entirely in JavaScript and can be used in the Node.JS environment." In other words, Sequelize is an ORM that works with relational databases and Node.js. It allows us to do many things including:

- Represent models and their data.
- Represent associations between these models.
- Validate data before they gets persisted to the database.
- Perform database operations in an object-oriented fashion.

#### Model

A model is a class that maps to the data relation (table) and potentially bridges tables. You can think of a model as the blueprint (class) for what each row of data is going to contain. Unlike a migration, you perform CRUD on instances of your models.

#### Migration

 Migrations (also known as ‘schema evolution’ or ‘mutations’) are a way of changing your database schema from one version into another. You can think of a migration as the creation or changes you want to make to a database table or column. Before you can start manipulating your models, you need to create and run a migration. Examples of migrations are creating, deleting and altering tables (and their existing columns).

#### Sequelize-cli and the alias sqlize

We are going to be using the sequelize-cli so that we can easily run commands in the terminal to initialize our project and to create migrations and models. This requires us to first install the sequelize-cli (CLI stands for Command Line Interface) using `npm install --save sequelize-cli`, and then in order to run a command we need to type `node_modules/.bin/sequelize`. This is a bit annoying to type over and over so first thing we should do is create an alias so that we don't have to remember/type this.

##Setup

### Setup part 1 - getting the sqlize alias (you only have to do this once)

Before we even build our first app - we need to create an alias that we will be using for every single app we build with Sequelize. We're going to create an alias and called it `sqlize` and it will correspond to `node_modules/.bin/sequelize`.

In our .bash_profile or .zshrc file (remember these are in the ~ directory). Open the file up and add this __exact__ text

`alias sqlize='node_modules/.bin/sequelize'`

Then either close your terminal (Command + q) and open it again or in the ~ directory type `source .zshrc`

if you type in `which sqlize` and you see your alias, you have done this correctly.

### Setup part 2 - starting a new node project

Let's build our first app using Sequelize! First we need to create a node app and include our dependencies. __All in terminal__:

Create a new folder and add an app.js and .gitignore and initialize the repository

- `mkdir firstapp`
- `touch index.js`
- `touch .gitignore`
- `git init`

Add the text 'node_modules in our .gitignore

- `echo "node_modules" >> .gitignore`

Initialize our project and add/save dependencies (sequelize needs lodash and pg)

- `npm init`
- `npm install --save express ejs body-parser pg lodash sequelize sequelize-cli`

Create a database and initialize a sequelize project

- `createdb firstapp`
- `sqlize init`

### Setup part 3 - config.json, models and migrations:

In sublime we should now see a bunch of new folders. We now have config, migrations and models. This was created for us when we ran `sqlize init`. Let's start in the config folder and open up the config.json file. This file contains information about the database we are using as well as how to connect. We have three settings, one for development (what we will use now), test(for testing our code), and production(when we deploy our app on AWS/Heroku). Let's change the config.json so it looks like this (we will not be using the test or production environments, so just ignore those for now - all that matters is "development").

```
{
  "development": {
    "database": "firstapp",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}

```

Once this is complete, let's move to the models folder.

## Creating a model and a matching migration

In order to create a model, we start with `sqlize model:create` and then specify the name of the model using the `--name` flag. Make sure your models are __always__ in the singular (remember table name in plural, model name in singular). After passing in the `--name` flag followed by the name of your model, you can then add an `--attributes` flag and pass in data about your model. When you generate your model, you will also generate a corresponding migration. You only need to do this once for your model. 

Remember, if you want to make changes to your model after generating it - all you have to do is make a change and save it. If you want to make changes to your migrations, you have to re-run them (either by undoing the migration or by creating a new one that alters the migration).

Here is an example of a command to generate a User model with a first_name, last_name and age along with a corresponding migration. 

>Make sure you do __not__ have any spaces for each of the attributes and their data types

`sqlize model:create --name user --attributes first_name:string,last_name:string,age:integer`


This will generate the following migration

```
"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      age: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("Users").done(done);
  }
};
```

And a corresponding model:

```
"use strict";

module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return user;
};

```

## What is this "associate" thing in my model?

In this function, we specify any relations/associations (one to one, one to many or many to many) between our models (hasMany or belongsTo). We'll discuss this more in class, but always remember, the association goes in the model and the foreign keys go in the migration.

## Validations

Sequelize has a bunch of validations we can add to our models to ensure that our data has met certain criteria before add it to our database. To include validations in your model, wrap them in a validate object. An examples of this is validating an email address (making sure it has a @ etc. as well as ensuring that it is never null):

```
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define("user", {
 

    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
       }
    },
  },

    {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  return user;
};
```

## Running a migration

Whenever we generate a migration, we have to run the migration to execute the `up`method (which we have in our migration - when we undo a migration we run the down method). To do this, run in terminal `sqlize db:migrate`

## CRUD with Sequelize (Using our User model)

### Create

[create](http://sequelizejs.com/docs/latest/instances#create)

```
db.user.create({ first_name: 'Anil', last_name: 'Bridgpal', age: 99 }).then(function(data) {
  // you can now access the newly created task via the variable data
})
```

### Read

[find](http://sequelizejs.com/docs/latest/models#finders-find)

```
db.user.find(1).then(function(user) {
  // user will be an instance of User and stores the content of the table entry with id 1. if such an entry is not defined you will get null
})
```


[findOrCreate](http://sequelizejs.com/docs/latest/models#finders-findorcreate)

The methodfindOrCreate can be used to check if a certain element is already existing in the database. If that is the case the method will result in a respective instance. If the element does not yet exist, it will be created.

```
db.user
  .findOrCreate({ first_name: 'Anil' })
  .spread(function(user, created) {
    console.log(user) // returns info about the user
  })
```

[findAll](http://sequelizejs.com/docs/latest/models#finders-findall)

```
db.user.findAll().then(function(users) {
  // users will be an array of all User instances
})
```

### Update

[update](http://sequelizejs.com/docs/latest/instances#update)

```
// way 1

db.user.find({ where: { first_name: 'Anil' } }).then(function(user){
  user.first_name = 'Taco'
  task.save().then(function() {});
})

// way 2
db.user.find({ where: { first_name: 'Anil' } }).then(function(user){
  user.updateAttributes({
  first_name: 'Taco'
  }).then(function() {})
})

```

### Delete

[destroy](http://sequelizejs.com/docs/latest/instances#destroy)

```
db.user.find({ where: { first_name: 'Anil' } }).then(function(user){
  user.destroy().success(function() {})
})
```

##Promises
After a sequelize statement, we can interact with the return of that object using `.then` and in `findOrCreate` we will use `spread`

Finding a user

```
db.user.find(1)
```

This will execute a statement to find a user, but it will not let us interact with it. Because of the asyncrous nature of a call, we need to use a Promise (a type of callback) to get that data.

```
db.user.find(1).then((function(foundUser) {
	console.log(foundUser);
	//res.send("myTemplate", {user: foundUser)
})
```

in a `findOrCreate`, a callback will return back an array, instead of a single object. There is a type of callback called `.spread` which will allow us to break apart that array and use similar to a traditional callback.


```
db.user
  .findOrCreate({ first_name: 'Anil' })
  .spread(function(user, created) {
    console.log(user) // returns info about the user
  })
```
