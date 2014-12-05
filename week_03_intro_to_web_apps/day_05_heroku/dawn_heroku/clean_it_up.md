##Clean it up

Spend some time cleaning up your code / site. You should develop / test on your local computer and then when you want to push your changes just run the `git push heroku master` command

Note: you can still push to github using just `git push`

###Here are some optimizations to implement

* Make aware of host
	* `req.headers.host`
* Handle invalid url (yoururl.com/slkfjsalfkjs)
* Handle invalid input (in form)
* require http:// ()or add it for them)