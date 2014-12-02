var request = require('request');

var searchTerm = "matrix"


  request("http://www.omdbapi.com/?s=" + searchTerm, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var stuff = JSON.parse(body);
      console.log(stuff["Search"])
      // res.render("moviePage", stuff)
    } else {
      // res.render("errorPage")
      console.log("ERRR000R");
    }
  })