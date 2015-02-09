#Setting up a multipage site in Angular


##ngRouter
We first need to add another component to our

```
  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.11/angular-route.min.js"></script>


```

This will allow us to use the built in angular router, to create a single page app with different controllers and and differnt

###Addd `ngRoute` to each app

var app = angular.module('MyApp', ['ui.bootstrap', 'ngMessages', 'ngRoute' ]);

###Add a `ng-view` to your page
ng-view is basically the equivilant to <%= yield %> in rails


```
<body ng-app="MyApp">
  <div class="container"ng-controller="TacoController">
    <h1>Test</h1>
    <hr>
    <div ng-view></div>
    <hr>
    Footer
  </div>
</body>
```


###Add config for the router
We can set different settings for the router, and how the way the url works.

**What is #!**

Good question, its called a hashbang/shebang, its a way of delimitating the separation of a url on a

Read more:
http://stackoverflow.com/questions/3009380/whats-the-shebang-hashbang-in-facebook-and-new-twitter-urls-for

http://stackoverflow.com/questions/9952187/doing-links-like-twitter-hash-bang-urls


```
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/page1.html',
                controller  : 'TacoController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '/page2.html',
                controller  : 'TacoController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '/page3.html',
                controller  : 'TacoController'
            });

            $locationProvider.hashPrefix('!')
            // $locationProvider.html5Mode(true).hashPrefix('!');

    }]);
    
```
    
* AngularJS ngRoute Documentation -[https://docs.angularjs.org/api/ngRoute](https://docs.angularjs.org/api/ngRoute) 
    
###Configuring for production

Notice, there is a line highlighted that is commented out:

`$locationProvider.html5Mode(true).hashPrefix('!');`

the html5 mode can actually rewrite the url in the location bar, and this combined with a route on your app that catches all, and renders this page. We can achieve nice clean urls and have a really snappy page.


