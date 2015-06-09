$(document).ready(function(){
	for(var i=1; i<=100; i++){
		// creates a div element and instead of console.log you would have to use "div.text"
		var div=$("<div>"); 
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
		//selects the body element 
		$("body").append(div);
	}
});