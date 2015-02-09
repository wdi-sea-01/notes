#Intro to Sails

##Installing Sails

Sails (much like rails) is installed as a global command line tool. It can be easily installed from npm using the `-g` flag to install it globally. (this means it doesn't matter what directory you are in when you install it)

[Sails JS Documentation](http://sailsjs.org/#/documentation/concepts)

```
npm install sails -g
```

##Creating a new app


Creating a new app in sails is 1 letter different than doing it in rails.

```
sails new AppName
```

##Starting the app

```
cd AppName
sails lift
```

Go to `http://localhost:1337` in your browser.

Welcome to Sails.js!!

##Creating models / api

Sails has 3 main generators that we'll use

* `sails generate model name` - Creates a database model
* `sails generate controller name` - Creates a controller
* `sails generate api name` - Creates a model and controller

Sails automatically creates CRUD routes if a model and controller have the same name.

**IMPORTANT!!** by default sails does NOT pluralize model names so you should use all singular model names / routes / etc. IF you want to change that set pluralize to true in `config/blueprints.js` and it will behave just like rails. The default (non-pluralizing) behavior is generally less confusing.

```
sails generate api person
# creates api/models/PersonController.js
# creates api/controllers/Person.js
```

Because we're using mongo we do not need to define any fields before we start using our model. For a production app you should still define model fields (and validations).


##Using MongoDb with sails

By default sails uses a "flat file database" which is really just a json file in the root directory, but we want to use MongoDB (sails also supports most popular databases including postgres)

```
npm install sails-mongo --save
```

Setup your mongo db in `config/connections.js`

```
  mongoDbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    database: 'DatabaseName'
  }
```

Then tell your models which connection to use by default for storing data by editing `config/models.js`

```
//matches the name we defined in connections.js
connection: 'mongoDbServer'
```


##Migration options

Every time you load your app you will get the following prompt:

1. safe - never auto-migrate my database(s). I will do it myself (by hand)
2. alter - auto-migrate, but attempt to keep my existing data
3. drop - wipe/drop ALL my data and rebuild models every time I lift Sails

For development we want to use "alter" we can set the default value in the `config/models.js` file so it won't prompt us again.

**NOTE:** Sails will NEVER migrate data in production. You will need to manually upload your database schema (not really a problem for mongo but worth noting for sql databases)


##Testing models / Sails console

Just like rails sails has a console. Lets use sails console to test our model.

```
sails console

#create some people
Person.create({name:'John Doe',age:22}).exec(console.log)
Person.create({firstName:'Jane',lastName:'Doe'}).exec(console.log)
Person.create({name:'Gomez Addams',address:{street:'1313 Cemetary ln',city:'Seattle',state:'WA'}}).exec(console.log)

#list all people
Person.find().exec(console.log)
```

##Automatic CRUD routes

As mentioned above sails automatically creates CRUD routes for us so we can also test our models

The following routes are defined for us:

* index: GET http://localhost:1337/person
* show: GET http://localhost:1337/person/:id
* create: POST http://localhost:1337/person
* update: PUT http://localhost:1337/person/:id

Run `sails lift` and try it out (use postman for post/put)

Note: because we're using mongo we can also do arrays by having multiple of the same value and objects using dot notation.

##Creating model attributes

Adding explicit attributes to your model will allow you to have server-side validations of the types of data you are storing. Creating models in sails is very similar to creating them in rails or sequelize.

Example of `api/models/Person.js`

```
module.exports = {
    attributes: {
        name:{
            type:"string"
        },
        email:{
            type:"email",
            required: true
        },
        status:{
            type:"string",
            defaultsTo:'pending',
            enum:['active','disabled','pending']
        }
    }
};
```

see [Sails model documentation](http://sailsjs.org/#/documentation/concepts/ORM/Attributes.html) for more details



**Note:** if you are using `schema mode` or a schemaful database (postgres, etc) you are required to define attributes.


##Schema mode

On schemaless databases (MongoDb, redis) sails defaults to having schema mode turned off which means you can store any attributes on any model (regardless of if those attributes are defined in the model). You can set `schema: true` in `config/models.js` to only allow data defined in the models.

On schemaful databases (Postgres, MySql, etc) schema mode cannot be turned off because the data needs to be stored in tables.

##Custom routes

Custom routes can be defined in `config/routes.js`. Routes are defined as an object literal and are loaded from the top down (just like express / rails).

The left side (the key) of the object is the route.

The right side can either be a string OR an object.

```
'/person/taco':'PersonController.taco',
'/person/burrito':{
    controller:"PersonController",
    action:"burrito"
}
```

##Controllers

Controllers in sails are the same as express (because sails is built on top of express). The only difference is sails sorts the actions in to controller files (like rails). The key is the action (used in a route) and the value is the `function(req,res){ }` that we all know and love.

```
	taco:function(req,res){
        res.send("Taco Page");
    },
    burrito:function(req,res){
      res.send("Burrito Page");  
    }
```


More info: [Sails routes documentation](http://sailsjs.org/#/documentation/concepts/Routes)

##Overriding built in routes

As mentioned above sails creates CRUD routes / actions for us automatically, but often some of the default actions aren't good enough.

All you have to do to override an action is to define an action in the controller with the correct name. For example, if I want to override the create action of person I'd just add that action and put whatever code I want in it.

```
    create:function(req,res){
        res.send('this is the create page')
    }
```

Then we can use the ORM to make it create a user with the data provided and some extra data (in this case a random number)

```
    create:function(req,res){
        var personData=req.body;
        personData.random=Math.floor(Math.random()*9999);
        Person.create(personData).exec(function(err,person){
            if(err) return res.send(err);
            res.send(person);
        });
    }
```



