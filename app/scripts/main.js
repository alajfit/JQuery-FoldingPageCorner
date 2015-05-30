console.log('\'Allo \'Allo!');

$(document).ready(function() {
	$('.flagExtender').hide();

	$('.flagButton, .flagExtender').on('click', function() {
		// alert('rolling');
		$('.flagExtender').toggle(200);
		$('.flagButton').toggle(200);
	});
});