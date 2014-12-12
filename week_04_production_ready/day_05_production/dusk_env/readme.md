#Safely Storing API Keys
We need to hide our api keys so we don't have to reveal them in your github.


###Install foreman
You will have foreman if you have already installed `heroku-toolbelt`


###Setup your `.env` file
In your `.env` file put your api keys that you will need, listed line by line. There are no spaces or quotes needed.

```
taco=ABCDXYZ123
burrito=2342390980sfadx980d
food_secret=qwertyuiop1234567890
```

###Ignore this file
Add the `.env` file to your existing `.gitignore`

```
echo ".env" >> .gitignore
```

###Use the `.env` variables in your code

All your environment variables are accessible via `process.env`

```
console.log(process.env.taco)
```

or something like

```
var client = new ApiClient({key: process.env.taco)
```
<<<<<<< HEAD

###What if I don't want to type that?
We can create an alias so we don't have to type it out every time.

Open up your `.zshrc` file via `subl ~/.zshrc`

add a line under aliases:

```
alias fm="foreman run nodemon"

```
So you can start your project via `fm` now!

