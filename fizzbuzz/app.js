$(document).ready(function() {
//Loop through 1 to 100:
	for(var i=1; i<=100; i++) {
//to check if var i is divisible by 3 AND 5
		if((i%3==0) && (i%5==0)) {
			$("body").append("<p>Fizz Buzz</p>");
		}
//to check if var i is divisible by 3
		else if(i%3==0) {
			$("body").append("<p>Fizz</p>");
		}
//to check if var i is divisible by 5
		else if(i%5==0) {
			$("body").append("<p>Buzz</p>");
		}
		else {
			$("body").append("<p>" + i + "</p>");
		}

	} 


});