##Polymorphic comments


see: [Rails guide](http://guides.rubyonrails.org/association_basics.html#polymorphic-associations)

##Generate models

in terminal

```
rails g model comment body:text user:references commentable:references
```

add `polymorphic` to migration

```
t.references :commentable, polymorphic:true, index: true
```



**models/user.rb**

* has many comments

```
has_many :comments
```


**models/comment.rb**

* belongs to commentable
* has_many comments

```
belongs_to :commentable, polymorphic: true 
has_many :comments, as: :commentable
```

**models/post.rb**

* has_many comments

```
has_many :comments, as: :commentable
```


##Try it out

in terminal
```
rails c

#list comments, posts, users
Comment.all
Post.all
User.all

#add comment to first post
User.first.comments << Post.first.comments.create({body:"my first comment"})

#add comment to first comment of first post
User.first.comments << Post.first.comments.first.comments.create({body:"my first SUB comment"})

#... etc... etc
User.first.comments << Post.first.comments.first.comments.first.comments.create({body:"my first sub... sub.. comment"})

```

