##Movie database - part 2


Finish / expand on the movie search project

* **Add a navigation to page**
	* Browse Watch list, Search movies
* **Create Home Page**
	* Should have a picture of some sort
	* Should have a brief description / intro / tagline* 
* **Show movie page (modify)**
	* add "Add to watch list" button
		* Should add the imdb code, title, and year to a database
* **Create Watch Page**
	* create a list of "movies to watch"
	* each item should...
		* Display title and year
		* Link to "show movie" page
		
		
**BOUNUS**

* Add a delete button to watch list



###Add new dependencies


```
npm intall pg sequelize sequelize-cli --save
```


###Hidden form fields

```
<input type="hidden" value="ANY TEXT VALUE">
```


See [notes from yesterday](https://github.com/wdi-sea-01/notes/tree/master/week_03_intro_to_web_apps/day_04_more_sql/dawn_sequelize) for info on creating a database, models, migrations, etc...