console.log('\'Allo \'Allo!');

$(document).ready(function() {

	$('.flagButton, .flagExtender').on('click', function() {
		// alert('rolling');
		$('.flagExtender').toggle(300);
		$('.flagButton').toggle(300);
	});
});