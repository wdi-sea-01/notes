#Authentication in theory

Authentication is a complex concept that involves using many of the concepts you've already learned and several new concepts. An authentication system allows the registration / signup of new users and allows those users to sign in.

To facilitate that we need to create the following:

* A GET route with a form where the user can register
* A POST route to create a user in the database
* A user model / table to store user data
* A GET route with a form where users can login
* A POST route to validate the users e-mail and password

All of the above we've already learned how to do in the past couple weeks.

Additionally, we need to:

* Encrypt the user's password
* Create a session to remember a user between page loads
* Create a way to easily check if the user is logged in
* Deny the user access to certain pages if they aren't logged in


To do this we need to learn some new concepts.



##Sessions

###What are sessions?

Sessions are used to store data about a user on the server. This can be an authenticated user or a non-authenticated user. Session data is stored on the server for each person using the website and referenced using a cookie stored on the users computer. The session cookie contains a unique key that allows the server to access the correct data for each person.

###Why is this useful?

Session data is retained between page loads so it allows sharing of data between requests without passing it in the url string. Sessions are also integral for user authentication.

###Using sessions in express

In express to utilize sessions we need to load the session middleware. The setup is pretty simple and very similar to setting up the body-parser middleware.

First we need to install the npm module

```
npm install express-session --save
```

Then we need to require it and "use" it

```
var session = require('express-session');
//...
app.use(session({
	secret: 'GA is AWESOME!!',
    resave: false,
	saveUninitialized: true
}));
```

The initilization funciton above `session()` takes an object containing some options:

* **secret** - a unique string used to help prevent tampering. You should change this string to some random characters or words. It doesn't  really matter what you type here as long as it's unqiue to your app.
* **resave** - forces re-saving of the session. This used to be optional, but now expess throws a warning if you leave it out.
* **saveUninitialized** - stores the session even if we haven't stored any values to it yet. This is also an item that is now required and used to be optional.

Both of the last 2 values are kinda like the extended:true on body parser. Don't worry too much about them at this time as they really don't make any difference in the way you'll be using sessions.


Once the session middleware is installed you can read / write sessions using the `req.session` object.

```
req.session.lastPage = '/myPage';
```

Then you can retrive the data the same way

```
//on another page
console.log(req.session.lastPage);
//outputs: /myPage



##Encryption

For password encryption we'll use bcrypt. Bcrypt creates highly secure salted passswords. Learn more about bcrypt: [bcrypt wiki](http://en.wikipedia.org/wiki/Bcrypt)

To use bcrypt in node we need to install / use the bcrypt npm module.

**Install bcrypt**

```
npm install bcrypt --save
```

**Encrypt (hash) password**

```
//example
bcrypt.hash("myPassword", 10, function(err, hash) {
	//hash = encrypted password (using salt)
});
```

**bcrypt.hash() takes 3 parameters**

* Password to encrypt -- self explanitory
* Rounds -- Number of rounds of processing when generating the salt. The higher the number the more secure the encryption.
* Callback function (called when encryption completes)

**Note about rounds:** The higher the number the longer it will take for a potential hacker to crack the password. HOWEVER, it also takes longer to create the password. The default value of 10 takes less than a second. A value of 13 will take about a second. 25 will take about an hour and 30 will take DAYS to complete. The default value of 10 is perfectly fine for now.

[More info about bcrypt module](https://www.npmjs.com/package/bcrypt)


##Creating Middleware

We want to be able to check if our user is logged in from within any of our routes. One strategy for doing this is to expand our request object (req) using an express middleware.

We've already used 3rd party Express middleware and creating our own middle ware is shockingly simple.

**Review: Loading body-parser middle ware**

```
//load body parser module
var bodyParser = require('body-parser');
//tell express to "use" it as a middleware
app.use(bodyParser.urlencoded({extended:false}));

```

**Creating our own middleware**

app.use simply accepts a function as it's parameter and gives us 3 parameters:

* req - the request object
* res - the response object
* next - a callback function (moves to the next middleware)

We can modify each of these parameters and the modification will be reflected in the next middleware and finally in our route code.


**Example**

```
app.use(function (req, res, next) {
    req.getParamNames = function(){
    	return Object.keys(req.params);
    }
    next();
});

// ...later on in your code...

app.get('/sum/:x/:y',function(req,res){
	res.send(req.getParamNames());
});
//outputs: ['x','y']

```

Using this concept we can create a middleware to get our currently logged in user from the `req.session`.

##Sequelize Hooks

Hooks allow us to perform an action at different points throughout the life cycle of a model. For example, we could do something before an item is updated or after an item is created.

Sequelize supports many types of hooks. [Full list in documentation](http://sequelize.readthedocs.org/en/latest/docs/hooks/)


**Example: normalize tags using beforeCreate**

If we want all of our tags to be stored in all caps we could use a beforeCreate hook. This way if someone adds a tag `Taco` it will be stored as `TACO` and all of our tags will be the same.

```
//in models/tag.js -- tag model

//... some other model code above
hooks: {
	beforeCreate:function(tag, options, cb){
	
		//take the tag name and capitalize it
		tag.name=tag.name.toUpperCase();
		
		//pass the updated tag object back
		cb(null,tag);
	}
}
//... some other model code below

```

For authentication we can use beforeCreate hook to automatically encrypt a users password before it is created (aka before the data is inserted into the database).





