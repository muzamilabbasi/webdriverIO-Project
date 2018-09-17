"use strict"

describe( "User Reset Tests", () => {
	var retailerPage = require( "../pages/retailerPage.js" ),
		utilsPage = require( "../pages/utils.js")
	
	beforeEach ( () => {
		retailerPage.get();
		utilsPage.switchToIframe( ".iframe-container > iframe " )
		// click retailer login
		retailerPage.getRetailerLogin().click()
		// pass admin credentials
		retailerPage.setUsername( process.env.ADMIN_USERNAME )
		retailerPage.setPassword( process.env.ADMIN_PASSWORD )
		// Click Continue Button
		retailerPage.clickContinueButton().click()
		// sometimes we need explicit wait
		browser.pause(5000)
		browser.newWindow( process.env.url, 'User Reset' )
	} )
		
	it( "Reset User", () => {
		retailerPage.setUserResetNumber( process.env.PHONE )
		retailerPage.clickContinueButton().click()
		browser.pause( 5000 )
	} )
} )
