#Intro to MongoDB

(for part 2 of dawn see `intro_to_sails.md`)

MongoDB (short for hu**mongo**us) is the leading NoSQL database. It is a schemaless document based datastore. This means it doesn't have `tables` it instead has `documents`.

Documents are essentially JSON objects so that means that we can stick any data into a document. So one user could have `firstName` and `lastName` fields and another could have a `fullName` field only.

Additionally, documents can be nested (instead of using relationships). This means that a user could contain many "pets" and each of those pets could have it's own attributes (name, type, age).

Basically anything you could do with a JSON object literal can be done with a MongoDb database.

Read more about MongoDB here: [MongoDB Documentation](http://docs.mongodb.org/manual/)


##Installation

Before we can begin we need install the MongoDB server. We can simply install it from brew, but then we also need to create a data directory and take ownership of it so mongo will have access to it.

```
#Install mongo
brew install mongodb

#make data directory
sudo mkdir -p /data/db

#get your user name
whoami

#set data directory permissions
sudo chown -R USERNAME:wheel /data

#start mongo server
mongod

```

##Test it out

Open a new terminal window (leave the mongo server running in another terminal window) and try the following...

```
#start mongo console
mongo

#show current database
db

#list all databases
show dbs

#create / switch to a database
use myFirstDb

#check that it worked
db

#will not show your new database until you add data
show dbs

#insert some data
db.people.insert({name:"Lenny",role:"teacher"})
db.people.insert({name:"Anil",role:"teacher"})
db.people.insert({name:"your name",role:"student"})

#list data (VAR IS REQUIRED!!)
var people = db.people.find()

#show first / second person
people[0]
people[1]

#doesn't show all people (just a pointer)
people

#does show all people as an array
people.toArray()
```

##Searching

```
#find all teachers
db.people.find({role:"teacher"})

#find by name (exact)
db.people.find({name:"Lenny"})

#search by name
db.people.find({name:"jane"})
db.people.find({name:/.*Jane.*/i})
```

##Modifying

```

#Change name on an item
db.people.update({name:"Anil"},{name:"Anil Bridgpal"})
db.people.update({name:"Lenny"},{name:"Lenny Urbanowski"})

#fix removed role field
db.people.update({name:{$regex:'.*l.*',$options:'i'}},{$set:{role:"teacher"}},{multi:true})

#rename typo column name
db.people.update({},{$rename: {"rold":"role"}},{ multi: true })
```

##Nested data


####Objects

```
db.people.update({name:'Lenny'},{"$set":{
    "address":{
        street:'1313 mocking bird ln',
        city:'Seattle',
        state:'WA',
        zip:'98101'
    }
}})
```


####Arrays

```
db.people.update({name:'Lenny'},{"$addToSet":{"pets":    {
        name:'neko',
        type:'cat',
        age:12
    }
}})


db.people.update({name:'Lenny'},{"$addToSet":{"pets":    {
        name:'fido',
        type:'dog',
        age:"4",
        note:"fake"
    }
}})

```


##Loops

```
#print all names
var people = db.people.find()
people.forEach(function(item){
    print(item.name)
});

#split name into first / last
var people = db.people.find()
people.forEach(function(item){
    var name = item.name.split(' ');
    db.people.update({_id:item._id},{$set:{name:{first:name[0],last:name[1]}}});
});

```

