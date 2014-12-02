# Working with APIs

| Objectives |
| :---- |
| Know what API stands for |
| Not get scared when hear the term API |
| See some examples of APIs |
| Build OMDB API example |

## Building from yesterday's lesson

- Set up Node/Express app
- Set up form & route for a movie search
- Have handler call OMDB API
- Render results in a template

## Questions to ask yourselves

- Do you know what API stands for?
- Do you know of any APIs?
- Have we used any APIs in class yet?
- Have we had our client-side code talk to our server-side code?

## Application Programming Interface

Programs talking to (i.e., interfacing with) each other.

- Browser <-> Browser (e.g., Your JS calls Google Maps)
- Browser <-> Server (e.g., Your JS calls your server)
- Server <-> Server (e.g., Your server calls someone else's)
- Server <-> Database (e.g., Even your database has an API)

### Keyword: Interface

Where else in computing do we see the term "interface"?

- GUI = Graphical User Interface = [U]sers interacting with programs
- API = Application Programming Interface = [P]rograms interacting with programs

## Why do we care?

- Need to know the term API to be a programmer :)
- In order for your software to be useful, it's going to have to talk
  to other software.

## Examples

### Browser has an API

- document.getElementById()
- window.onload = function () {}

### Express has an API

    app.get("/", function (req, res) {
        res.send("Hello, World!");
    })

    app.get("/add/:x/:y", function (req, res) {
        // ...
    });

[http://expressjs.com/4x/api.html](http://expressjs.com/4x/api.html)

### Twitter has an API

[https://dev.twitter.com/rest/public](https://dev.twitter.com/rest/public)

### Last night's homework?

Your app.js file created an API that your client-side code
communicated with.  It, however, may not have been a very well defined
API :)

## OMDB API Exercise

### Requirements
Create an Express site that displays a form to the user.
It should have one field that accepts a search term. Use an
Express route to handle the form submission. When the form is
submitted, your handler should make a request to the API from
http://www.omdbapi.com/ for movies matching the search term.

### Steps
- Create an Express App.
- Create a route for the home page ("/").
- The home page should use an .ejs template to display a `<form>`.
- The form should have an input box that accepts a search term.
- When the user submits the form, create an Express route to catch it.
- Use the `request` module to make a request to http://omdbapi.com for
  movies matching the search term.
- Process the JSON results and display movie info on the page using
  another .ejs template.

## Links

- http://omdbapi.com/
- https://github.com/mikeal/request
