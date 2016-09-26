/* openning humbeurger menu */
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
		$('nav').toggleClass('displaied');
	});
});
/* end of */

/* smooth scrolling from menu */
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
/* end of */

/* toggling class between menu items */
$(document).ready(function(){
	$('.default').click(function(){
		$('.menu-active').removeClass('menu-active').addClass('default');
		$(this).addClass('menu-active');
	});
});
/* end of */  
