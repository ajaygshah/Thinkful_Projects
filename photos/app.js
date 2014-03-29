$(document).ready(function() {
	$('.gettags').submit(function(event) {
		$("#show").html('');
		var tags = $(this).find("input[name='tag']").val();
			getphotos(tags);
	})
});

var getphotos= function(tags) { $.ajaxSetup({ cache: true });
  $.getScript('https://connect.facebook.net/en_UK/all.js', function(){
    FB.init({
      appId: '270182096483988'
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
   FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = response.authResponse.userID;
    $("#user-detail").html(uid);
    var accessToken = response.authResponse.accessToken;
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
  } else {
    // the user isn't logged in to Facebook.
  }
 });
  });
};

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


