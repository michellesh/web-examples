// footer.js
// Sticky Footer
// by Michelle Sharer 2012

$(document).ready( function() {

	//this jQuery code gets the height of the browser window, then subtracts
	//  off the height of the footer (you specified this height in the stylesheet)
	//  it then sets the minimum height of the 'wrapper' element (the rest of 
	//  your site's content) to the result. the resize() function does the exact
	//  same thing every time the browser is resized, to maintain "stickiness"

	//sets the footer initially when the page loads
	$('div.wrapper').css( 'min-height', $(window).height()-$('div.footer').height() );

	//resets the footer when the window is resized
	$(window).resize( function() {

		//sets the footer using the new window height
		$('div.wrapper').css( 'min-height', $(window).height()-$('div.footer').height() );
	});
});

