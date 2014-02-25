//To respond to click or keypress event:
$(document).ready(function() {
	$("#in").focus();
	$("#add").on("click", function() {
		add_data();
	})	

	$("#in").keypress(function(e) {
		var code = e.which;
		if(code == 13) {
			add_data();
		}
	})

//To add class to strike-through item when shopper 
//finishes shopping an item
	$("ul").on("click", "li", function() {
		$(this).toggleClass("strike");
	})

//......................................................

//this code below is to remove an item from the list
	var button2 = $("<button>Remove</button>");

	$("ul").on("mouseenter","li" ,function() {
		$(this).append(button2);

		$(this).on('click', 'button', function() {
			$(this).closest('li').remove();
		})
	})
			.on("mouseleave", "li", function() {
				$(this).find('button').remove();
			})

//......................................................

//Enable sorting list by user preference Jquery UI
	$("ul").sortable();
})

//......................................................



//Below is the function to add the item from the input list. 
function add_data() {
	
	if($("#in").val() == "") {
			alert("Please type an item. Thank you!");
			$("#in").focus();
	}
	else {
		$("ul").append("<li>" + $("#in").val() + "</li>");
		$("#in").val("");
	}
}

	

