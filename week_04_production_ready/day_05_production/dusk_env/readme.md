#Safely Storing API Keys
We need to hide our api keys so we don't have to reveal them in your github.


###Install foreman
Install the pkg file from https://github.com/ddollar/foreman


###Setup your `.env` file
In your `.env` file put your api keys that you will need, listed line by line. There are no spaces or quotes needed.

```
taco=ABCDXYZ123
burrito=2342390980sfadx980d
food_secret=qwertyuiop1234567890
```

###Ignore this file
Add the `.env` file to your existing `.gitignore`

```echo ".env" >> .gitignore
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