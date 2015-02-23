#Deployment Review

##Sails to Heroku

First setup your heroku app

```
heroku create CHOSEN_APP_NAME_HERE
```


####Setup database

use one of the options below depending on what database you want to use. Mongo Soup / Lab are about the same, but some people had trouble adding one or the other so I've included both.


**Mongo Lab**

```
heroku addons:add mongolab
```

**Mongo Soup**

```
heroku addons:add mongosoup
```

**Postgres**

```
heroku addons:add heroku-postgresql:dev
```

####Set NODE_ENV to production

```
heroku config:set NODE_ENV=production
```

####Check config

```
heroku config
```

You should see a database connection string and `NODE_ENV: production`

####Clear config files

**config/connections.js**

```
module.exports.connections = {

};
```

**config/models.js**

```
module.exports.models = {
    migrate: 'alter'
};
```

####Setup development / production

**config/env/development.js**

```
module.exports = {

    connections:{
        myMongoDbServer: {
            adapter: 'sails-mongo',
            host: 'localhost',
            port: 27017,
            database: 'sails_blog2'
        }
    },
    models:{
        connection: 'myMongoDbServer',
        migrate: 'alter'
    }
};
```

change `database:` to be your database name.


**config/env/production.js**

```
module.exports = {

    connections:{
        myMongoDbServerProd: {
            adapter: 'sails-mongo',
            url: process.env.MONGOLAB_URI
        }
    },
    
    models:{
        connection: 'myMongoDbServerProd'      
    }
};
```

Change `url: process.env.MONGOLAB_URI` to your database connection (if using mongo soup or postgres)

For postgres the only difference is instead of adapter: `sails-mongo` you change it to `sails-postgresql` in both files.

####Push to heroku

```
git add -A
git commit -m "setting up for production"
git push heroku master
```
####Config values / api keys

Remember to set your api keys on heroku. You have to do a `heroku config:set` for each key in your .env file or .zshrc file.


```
heroku config:set MY_SECRET_KEY=abc123blahblahblahblahstuff
```

**Remember** it's `KEY=value`  (no quotes or spaces)



####Mongo database migration

Since we're using Mongo there is no need to migrate your database so your site should be up and running.

####Postgres database migration

IF you're using postgres there is one more step. You must backup your database and push it to heroku.

**Backup postgres database to file**

```
pg_dump -s -c APP_DATABASE_NAME > db.sql
```

The `-s` flag is for schema only. If you want your development data included just remove that flag.

The `-c` flag tells it to drop old data before creating new data. This is just incase you've done this more than once and are overwritting existing data.

**Push file to heroku**

```
heroku pg:psql < db.sql
```

####Troubleshooting

If you see "Application Error" there should be some error messages on the Heroku logs. First, try using heroku logs and seeing if you can see the issue (should be right before something about "changing state from up to crashed"

If you can't find it you can also try restarting the and quckly running heroku logs until you see the error OR using live logs (with tail) and looking for the error.

**View logs**

```
heroku logs
```

**View LIVE logs**

```
heroku logs --tail
```

**Restart**

```
heroku restart
```
