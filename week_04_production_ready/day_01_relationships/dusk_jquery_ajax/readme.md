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