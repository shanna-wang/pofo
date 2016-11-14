$( document ).ready(function() {

	$('.profile-navigation .profile').on('click', function() {
		var index = $(this).index() + 1;
		console.log(index);
		$('.board-container').removeClass('visible');
		$('#board-' + index).addClass('visible');
		$('.profile').removeClass('focus');
		$(this).addClass('focus');
		$('.profile-navigation').attr('class', 'profile-navigation')
		$('.profile-navigation').addClass('center-' + index);
	});

  console.log( "ready!" );
});