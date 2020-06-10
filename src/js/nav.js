	$(document).ready(function() {
		var navBtn = $(".nav-mobile__btn");
		var navBtn_active = $(".nav-mobile_active");
		var mobileLink = $(".mobile-anchor");

		var menu = $(".nav-menu");

		navBtn.click(function() {
			navBtn.toggleClass('nav-mobile_active');

			menu.toggleClass('nav-menu_active');
		});

		navBtn_active.click(function() {
			navBtn.removeClass('nav-mobile_active');

			menu.removeClass('nav-menu_active');
		});

		mobileLink.click(function(event) {
			navBtn.removeClass('nav-mobile_active');
			menu.removeClass('nav-menu_active');
		});
	});