var accessToken = '848428a24641c64ae52ad52769f50fa5bab2052d235231a577123ea1f6218785';

// Call Dribble v2 API
$.ajax({
	url: 'https://api.dribbble.com/v2/user/shots?access_token=' + accessToken,
	dataType: 'json',
	type: 'GET',
	success: function(data) {
		if (data.length > 0) {
			$.each(data.reverse(), function(i, val) {
				$('#shots').prepend(
					'<a class="shot" target="_blank" href="' +
						val.html_url +
						'" title="' +
						val.title +
						'"><div class="title">' +
						val.title +
						'</div><img src="' +
						val.images.hidpi +
						'"/></a>'
				);
			});
		} else {
			$('#shots').append('<p>No shots yet!</p>');
		}
	}
});
