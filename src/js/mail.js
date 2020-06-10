$(document).ready(function() {
	$("form").submit(function(event) {
		event.preventDefault();

		yaCounter50714332.reachGoal('orderFormSubmit', function () {});

		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function(){
			$(this).find('input').val("");
			$("form").trigger("reset");

			$(".overlay-form").hide();
			$(".overlay-thanks").show();
		});

	});
});