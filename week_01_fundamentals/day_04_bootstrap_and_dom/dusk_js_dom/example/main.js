
//listen for dom to be loaded
document.addEventListener('DOMContentLoaded',function(){

	//find all objects on the page with class ".btn"
	// aka find all the buttons
	var buttons = document.querySelectorAll('.btn');

	//loop through the ARRAY of buttons
	for(var i =0; i < buttons.length; i++){

		//add a click listener to button "i"
		buttons[i].addEventListener('click',function(){
			this.style.backgroundColor="red";
		});

		//add a mouseover listener to button "i"
		buttons[i].addEventListener('mouseover',function(){
			this.style.backgroundColor="purple";
		});

		//add a mouseout listener to button "i"
		buttons[i].addEventListener('mouseout',function(){
			this.style.backgroundColor="yellow";
		});
	}

	/****************************************
	 *** NOTE: this was added after class ***
	 ****************************************/

	//find the search button by id
	var searchButton = document.querySelector('#doTheSearch');

	//listen for a "click" event on the search button
	searchButton.addEventListener('click',function(){

		//find the text box
		var searchText = document.querySelector('#searchText');

		//check if the value is "truthy"
		if(searchText.value){
			//do the search (or just pretend like we're doing it)
			alert('This would search for: ' + searchText.value);
		}else{
			//they didn't enter any search text so display an error message
			alert('ERROR!! You must enter search text.');
		}
		
	});

	/********************************************/

});


//just a console.log to show that this runs BEFORE "DOMContentLoaded"
console.log('end of main.js');

