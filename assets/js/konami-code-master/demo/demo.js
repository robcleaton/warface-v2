(function( $ ) {
	"use strict";

	$(function() {
		$( window ).konami({
			cheat: function() {
				alert( 'Cheat code activated!' );
			} // end cheat
		});
			
		$(window).on('konami.with.message', function(event, opts) {
			alert('Cheat code with message: ' + opts.message);
		});
	});
}(jQuery));
