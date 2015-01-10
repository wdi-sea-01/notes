#Bog app continued

For the weekend your assignment is to finish and expand on your bog app.

##Complete the bog

Before adding any new features your app should...

* Support full CRUD
    * List all creatures
    * View a single creature
    * Add a new creature
    * Edit an existing creature
    * Delete an existing creature
* Utilize bootstrap for all elements
* Gracefully handle bad urls
    * /asdfsafsfasf
        * Error 404 - page not found
    * /creatures/sfasfdsadf
        * Error 404 - creature not found
    * /creatures/99999/edit
        * Error 404 - creature not found


##Expand the bog

###Visual creatures

Using the flickr API make your app load pictures of each type of creature in your database.

The `creatures#show` action you should load pictures from flicker based on the creature name.

The `creatures#show` view should display a list of thumbnails related to the creature. Each thumbnail should be clickable and link to the full size image in a new tab


###Valid creatures

Add validations to your creature model.

* creature.name should
    * be unique
    * be required
    * not contain numbers or symbols
* creature.description should
    * be required
    * be between 10 and 255 characters


##More creature info - BONUS

Use the rest-client gem to interact with the public reddit api and load results related to your creature and display them (with links) on your `creature#show` page.


##Resources

* [Rails Validations](http://guides.rubyonrails.org/active_record_validations.html)
* Flickr api
    * [api example](flickraw.rb)
    * [Flickraw gem](https://github.com/hanklords/flickraw)
    * [Flickraw documentation](http://hanklords.github.io/flickraw/)
    * [Flickr Documentation](https://www.flickr.com/services/api/)
* Reddit api
      * [Rest-client gem](https://github.com/rest-client/rest-client)
      * [api example](reddit.rb)
      * example url: [http://www.reddit.com/search.json?q=snail&limit=5](http://www.reddit.com/search.json?q=snail&limit=5)
