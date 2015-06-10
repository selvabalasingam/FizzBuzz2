$(document).ready(function(){
	var enterNumber = prompt("Enter a Number");
	var convertNumber = +enterNumber; // "+enterNumber" can be either a number or a function that evaluates to a number
	var fizzbuzzfunction = function (){
	for(var i=1; i<=100; i++){
		var div=$("<div>"); // creates a div element and instead of console.log you would have to use "div.text"
		if(i%15 == 0) {
			div.text("fizzbuzz");
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
		$("body").append(div); //selects the body element
	}
	}
		if(isNaN(convertNumber)){ // The isNaN() function determines whether a value is an illegal number (Not-a-Number).
		prompt("Please enter a number only!");
		} 
		else if(convertNumber % 1 > 0){ // if the remainder is greater than zero than it's a decimal, whereas if it was "convertNumber % 1 == 0" it would mean that there's no remainder (it's a whole number)
		prompt("Please enter a whole number only!");
		} 
		else {
		fizzbuzzfunction();
		}
});

