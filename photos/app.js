$(document).ready(function() {
	$('.gettags').submit(function(event) {
		$("#show").html('');
		var tags = $(this).find("input[name='tag']").val();
			getphotos(tags);
	})
});

 $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_UK/all.js', function(){
    FB.init({
      appId: '270182096483988',
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
  });


var getphotos = function(tags) {
	var photu = $("body").find("#show img");

	var request = {tagged: tags,clientID: '28b17b9f6e3f448c850220b2ef571088', max_id: 45, count: 30};

	var result = $.ajax({
		url:'https://api.instagram.com/v1/tags/' + request.tagged + '/media/recent/?client_id=' + request.clientID,
		data:request,
		cache: true,
		dataType: 'jsonp',
		type: 'GET',
	})
	.done(function(result) {
		alert('success');	
		for (var i = 0; i < result.data.length; i++) {
			link = result.data[i].images.thumbnail.url;
			$("#show").append("</div></div><img src='" + link + "'></img></div>");
		}
	})

};


