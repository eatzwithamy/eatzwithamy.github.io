$(document).ready(function(){
	$('#scrollbutton').click(function(){
		$('html').animate({scrollTop : 0}, 300);
	});

	$('a[href]').click(function(){
		$('html').animate({
			scrollTop : $($.attr(this, 'href')).offset().top - 170}, 300);
	});
});
