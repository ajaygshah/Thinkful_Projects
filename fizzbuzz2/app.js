$(document).ready(function() {
	fizzbuzz();
})

var fizzbuzz = function (num) {
	var num;
	num = +(prompt("Please input a number. "));
	while(isNaN(num) || num == "" || num%1 !=0 || $.trim(num)=="") {
		alert("please enter number ONLY!");
		num = prompt("Please input a number. ");
	}

	//Loop through 1 to num:
	for(var i=1; i<=num; i++) {
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
}