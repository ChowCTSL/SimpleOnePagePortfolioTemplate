$(document).ready(function($) {

	//animate the double down arrow for scrolling (bounce)
	$(".scroll").click(function(e){     
		e.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
	});

	//hide the dafault hamburger button when clicked
	$('#nav-button').click(function(){
		$(this).hide();
	});


	//hide the modal when anywhere else besides the menu items are clicked
	$('.nav-modal-dialog.modal-dialog').click(function() {
		$('#nav-modal').modal('hide');
	});

	//hide the modal when a menu item is clicked
	$('.menu-item').click(function(){
		$('#nav-modal').modal('hide');
	});

	//unfocus the hamburger icon to prevent it from showing up as depressed
	$('#nav-modal').on('hidden.bs.modal', function(e){
		$('#nav-button').show();
		$('#nav-button').one('focus', function(e){$(this).blur();});
	});

	//unfocus the social buttons after being clicked to prevent it from showing up as depressed
	$('.btn-social').click(function(){
		$('.btn-social').one('focus', function(e){$(this).blur();});
	});

	//unfocus the resume button after being clicked to prevent it from showing up as depressed
	$('.btn-resume').click(function(){
		$('.btn-resume').one('focus', function(e){$(this).blur();});
	});


});

//change arrow capacity when scrolling down
$(window).scroll(function(){
	$(".arrow").css("opacity", 1 - $(window).scrollTop() / 600);
});
