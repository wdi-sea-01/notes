#Intro to node apps

We have been working with node for a while now, but we've only used it as a means to execut simple JavaScript files. We have not tecnically created a node app at this point.

##Intilizing an app
Initlizing a node app is simple. You just use the `npm init` command in the project directory and it creates a `package.json` file for you. Generally, we want to create a git repository first and then init it as an node app. This will allow git to create our .gitignore file for us.

**Create a new node app**

* create a repo on github (with node.js .gitignore)
* clone the git repo
* cd into the repo directory
* type `npm init` and follow the prompts

Congrats! you just created your first version controlled node app.


##Intro to require()

You can load your own javascript files using the `require()` function by simply passing it a string containing the relative path to a .js file you want to load.

First we need to create a file to be loaded. This is just a simple javascript file that sets the value of `modules.exports`. You can pass a single function or a collection of functions using an object literal.

We'll create a simple file called `prettyOutput.js` that will output a string wrapped some lines to make it stand out.


```
module.exports = function(text){
	console.log(' ');
	console.log('-------------');
	console.log(text);
	console.log('-------------');	
}
```

Now to load that module we simply use `require()`

```
var prettyOut = require('./prettyOutput.js');
prettyOut('thing 1');
prettyOut('thing 2');
```

**NOTE:** when loading your own files they must start with './' for relative paths or '/' for absolute paths. If you do not designate a path node will try to look in the node_modules directory.


##Loading Node modules

Node includes just the bare minimum functionality by default and if you need to do more you need to load modules using the `require()` function. There are included modules you can see a list of them here: [Node API Documentation](http://nodejs.org/api/index.html)

For example, if we wanted to write to a file on the file system we would use the `writeFile()` method of the `fs` modules.


```
var fs = require('fs');

//async call
fs.writeFile('test.txt','this is some text',function(){
    //called when file write is completed
    console.log('file was written');
});

//this will output before 'file was written'
console.log('end of code.');

```

**IMPORTANT:** almost every function in Node.js is Asynchronous which means they do not block while they execute. Instead functions accept a callback function which is called once the function completes.


##Installing / Loading NPM modules

NPM (Node Packaged Modules) provides a great repository of available node modules. You can browse all available modules at [https://www.npmjs.org/](https://www.npmjs.org/).

NPM provides a great commandline tool which is pretty similar to home brew or apt-get. To install a module from the repository simply type `npm install <package_name> --save` the --save flag adds the name of the module to the package.json file so when you share the project with someone else they can easily instlal all dependencies by simply using the command: `npm install`

As an example, we can install and use sync-prompt and sleep. Prompt is a module to prompt the user and sleep is a module to pause the app.


**Installation**

```
npm install sleep --save
npm install sync-prompt --save
```

**Usage**

```
var fs = require('fs');
var sleepyTaco = require('sleep');
var inquisitiveBurrito = require('sync-prompt');

var input = inquisitiveBurrito.prompt('What should we store to the file?');

fs.writeFile('test.txt',input,function(){
    //called when file write is completed
    console.log('file was written');

    var inputSplit = input.split(' ');
    inputSplit.forEach(function(el,idx){
        console.log('word '+idx+' is '+el);
        console.log('....pausing a second.');
        sleepyTaco.sleep(1);
    });
});

console.log('end of file');

```



