"use strict"
var request = require('request-json')

var UtilsPage = {
	/**
	 * Switches the window
	 * @param IframeSelector is the default parameter
	 */
	switchToIframe : function( IframeSelector ) {
		browser.waitForExist( IframeSelector, 10000 )
		var myFrame = $( IframeSelector ).value
		browser.frame( myFrame )
	},

	phoneGenerator : () => {
		var generator = Math.random() * 2228
		return Math.floor( generator )
	},

	resetUser : function( number ) {
		var client = request.createClient("http://localhost:3000/api/ng/user/reset/");
		var payload = {phone: number, action: "remove"}
		client.post('posts/', payload, function(err, res, body) {
		return res.statusCode;
		});
	}
}

module.exports = UtilsPage
