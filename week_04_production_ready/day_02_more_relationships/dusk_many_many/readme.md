#Sequelize - Many to Many

If we wanted to expand our models to include a many to many relationship, it requires a certain naming scheme.

We will be expanding our data model, to include

**Very Important** Name - your models `singular`

`model:create --name tag --attributes name:string`

**Very Important** Name your join tables as two plural models combined, such as `tacosburritos`

`model:create --name poststags --attributes postId:integer,tagId:integer`

##Update your Validations

In order to associate posts to tags in a many to many fashion, you will need to con
Your posts and tags

###author.js

```
associate: function(models) {
  models.author.hasMany(models.post)
}
```

###post.js

```
associate: function(models) {
 models.post.belongsTo(models.author)
 models.post.hasMany(models.tag)
}
```

###tags.js

```
associate: function(models) {
  tag.hasMany(models.post)
}
```

##Examples

###Find or create an Author, create an associated post.

There are some helper functions that get generated automatically when you

```
db.author.findOrCreate({where: {name: "Anil"}}).spread(function(author,created){
  author.createPost({title: "taco", content: "burrito"}).then(function(post) {
  })
})

```

###Add a unique tag to a Post.

In order to add a unique tag to a post, we must first try to find or create a tag, in order to make sure it is in fact unique.

Secondly, we must attach a post to the tags, using some built in helpers.

Some ORM has capabilities to do a bulk create on an object associations, but that kind of logic is not built in Sequelize.

```
db.author.findOrCreate({where: {name: "Anil"}}).spread(function(author,created){
  author.createPost({title: "newTaco", content: "burrito"}).then(function(post) {
    db.tag.findOrCreate({where: {name: "xyzasdf"}}).spread(function(tag, created) {
      post.addTag(tag).then(function() {
        console.log("Its over");
        // res.send("");
      })
    })
  })
})
```

