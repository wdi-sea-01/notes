#Angular + Sails

Connecting angular and sails is fairly simple. We just put our frontend assets in the assets folder and just use the sails app as a backend API server.

##Sails API prefix

To avoid routing conflicts we need to tell our api (CRUD routes) to use a URL prefix. This is done in `config/blueprints.js` by setting the `prefix` value. I like to use the prefix "api".

##Setup frontend

* Add angular / bootstrap CDN to `views/layout.ejs`
* Create an `app.js` file in `assets/js` create angular module and routing in that file
* Create a `assets/js/controllers` folder
    * Create any angular controllers in that folder
* Create a frontend views folder `assets/views`
    * Put any frontend (angular) views in that folder.


##Setup backend

We need 1 controller / action to server our single page app. I like to use the "Pages" controller and an index action.

Create a route

```
'/': 'PagesController.index'
```

Generate controller

```
sails generate controller pages
```

Create an action

```
index:function(req,res){
    res.view('index')
}
```

Create a view `views/index.ejs` and put your html in that file `<ng-view></ng-view>`


##Enable HTML5 Mode

If you don't want the shebang (#!) in your url we need to enable HTML5 mode. This is a two part process...

Enable html5 mode in angular in the .config() method of your main module.

```
$locationProvider.html5Mode(true);
```

Enable a catch-all route in sails

```
"get /[^.?]+?":"PagesController.index"
```

This route uses a regex to send all requests NOT starting with a "." to the index action. The reason for this is because our static assets are stored from the .tmp folder so we don't want those requests to be intercepted by this route.