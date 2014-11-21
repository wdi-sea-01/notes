

document.addEventListener('DOMContentLoaded',function(){
	var myForm = document.querySelector('#myForm');
	var salsaInput = document.querySelector('#myInput');

	myForm.addEventListener('submit',function(tacoEvent){

		var searchTerm = salsaInput.value;

		if(!searchTerm){
			tacoEvent.preventDefault();
			alert('You must enter a search value');
			return;
		}

		if(!confirm('Do you want to search google for: " ' + searchTerm + ' "')){
			tacoEvent.preventDefault();
			alert('submitted: "' + salsaInput.value + '", but we are not going to search (preventDefault).');
		}else{
			alert('submitted: "' + salsaInput.value + '"... and now we are going to google (let form submit).');
		}

		
	});

	var tacoLink = document.querySelector('#myLink');
	tacoLink.addEventListener('click',function(thisIsTheEvent){
		
		if(!confirm('Are you sure you want to go?')){
			thisIsTheEvent.preventDefault();
		}
	});
});


console.log('end of main.js');

