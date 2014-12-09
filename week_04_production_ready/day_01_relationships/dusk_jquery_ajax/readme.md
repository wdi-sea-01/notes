#Convert Add / Delete to AJAX

Your mission is to convert your "add to watch list" and "delete from watchlist" buttons in to AJAX buttons using the proper [RESTful verbs](http://i.stack.imgur.com/RyM1b.png).

##Express route examples

###Post

```
app.post('/movies',function(req,res){
	//add the item to the database
	
	//send back some data
	res.send({somedata:'my data'});
});
```

###Delete
```
app.post('/movies',function(req,res){
	//remove the item from the database
	
	//send back some data
	res.send({somedata:'my data'});
});
```


##jQuery Ajax examples

###Post

```
$.post('/favorites',{
    title:'fake movie',
    year:'20x6',
    imdbCode:'8675309'
},function(data){
    alert('ADDED!!');
    //output data to console
    console.log(data);
});
```
see also: [jQuery $.post Documentation](http://api.jquery.com/jquery.post/)


###Delete

```
$.ajax({
    url:'/favorites/5,
    type:'DELETE',
    success:function(result){
        alert('deleted');
	    //output data to console        
        console.log(result);
    }
});
```

see also: [jQuery $.Ajax Documentation](http://api.jquery.com/jquery.ajax/)


##Using the data tag



```
	<div data-something="a value" class="myDiv"></div>
```

```
$('.myDiv').data('something');
//returns "a value"

```

**Note:** the data attribute does not like capital letters so instead of representing two words like this `data-twoWords` you should do it like this `data-two-words` which you would refer to in javascript using `.data('two-words')`



##Testing Routes with Postman

[Download Postman from the chrome store](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en)

You can use Postman to check your routes. I advise building your routes POST and DELETE and test them with postman before doing the jQuery / AJAX code.

When doing post be sure to click `x-www-form-urlencoded`