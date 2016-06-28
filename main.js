$(document).ready(function(){
	$('.bar').click(function(){
		var w = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

		var h = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;

		if (w >= 500) {
			$('.active').toggleClass('active');
			$(this).toggleClass('active');
			if ($('.left-bar').hasClass('active')) {
				$('.left-bar').css('left', '-10%');
				$('.middle-bar').css('left', '0%');
			}
			if ($('.middle-bar').hasClass('active')) {
				$('.left-bar').css('left', '-80%');
				$('.middle-bar').css('left', '0%')
			}
			if ($('.right-bar').hasClass('active')) {
				$('.left-bar').css('left', '-80%');
				$('.middle-bar').css('left', '-70%');
			}	
		}	
	});
});