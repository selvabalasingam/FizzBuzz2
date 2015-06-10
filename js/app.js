$(document).ready(function(){
	var enterNumber = prompt("Enter a Number");
	var convertNumber = +enterNumber; // "+enterNumber" can be either a number or a function that evaluates to a number
	var fizzbuzzfunction = function(number){ // you need to pass an argument into your function and use that argument (use a new name and in this case it's "number")
	for (var i=1; i<=number; i++){ // use the same new name in the for function
		var div=$("<div>"); // creates a div
		if(i%15 == 0) {
			div.text("fizzbuzz"); // div.text(i) - sets the text of the div
		} 
		else if(i%3 == 0) {
			div.text("fizz");	
		} 
		else if(i%5 == 0) {
			div.text("buzz");	
		} 
		else{
			div.text(i);
		} 
		$("body").append(div); //attaches the div to the body (Selects the body element and then appends the div to the body)
	}
	}
		if(isNaN(convertNumber)){ // The isNaN() function determines whether a value is an illegal number (Not-a-Number).
		prompt("Please enter a number only!");
		} 
		else if(convertNumber % 1 > 0){ // if the remainder is greater than zero than it's a decimal, whereas if it was "convertNumber % 1 == 0" it would mean that there's no remainder (it's a whole number)
		prompt("Please enter a whole number only!");
		} 
		else {
		fizzbuzzfunction(enterNumber); // you need to use the variable that houses the user's input 
		}
});


