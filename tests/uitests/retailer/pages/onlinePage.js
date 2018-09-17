"use strict"

	// Generic information for store page

var OnlinePage = {
	/**
	 * Navigates to Online Store
	 */
	get : () => {
		browser.url( "http://localhost:8001/plugin/checkout.html" );
	},

	/**
	 * click checkout with
	 */
	clickCheckout : () => {
		return $( "a.btn-*-checkout" )	
	},

	/**
	 * send Phone Number
	 * @phoneNumber is the default parameter
	 */
	sendNumber : ( phoneNumber ) => { 
		browser.waitForExist( ".input-wrap [name='phone']", 20000 )
		$( ".input-wrap [name='phone']" ).click().keys( phoneNumber )
	},

	/**
	 * send Last 4 SSN
	 * @param lastFour is the default argument for passing last 4 ssn numbers
	 */
	sendSSN : ( lastFour ) => {
		$( "/html/body/div/div[1]/div[1]/div/div[2]/div/div[3]/div[1]/div[1]/form/div[1]/div[2]/label/div/input" ).click().keys( lastFour )
	},
}
module.exports = OnlinePage
