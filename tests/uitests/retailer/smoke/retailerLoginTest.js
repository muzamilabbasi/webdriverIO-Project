"use strict"

describe( "Retailer Login Tests", () => {
	var retailerPage = require( "../pages/retailerPage.js" ),
		utilsPage = require( "../pages/utils.js")
	
	beforeEach ( () => {
		retailerPage.get();
		utilsPage.switchToIframe( ".iframe-container > iframe " )
		// click retailer login
		retailerPage.getRetailerLogin().click()
	} )
		
	it( "Check Invalid Login on * Retailer", () => {
		// pass invalid authentications
		retailerPage.setUsername( process.env.INVALID_USERNAME )
		retailerPage.setPassword( process.env.INVALID_PASSWORD )
		// Click Continue Button
		retailerPage.clickContinueButton().click()
		// expect error message for invalid auth
		expect( retailerPage.getErrorStatus() ).toEqual( "Invalid Username or Password" )
	} )

	it( "Login as * Retailer", () => {
		// pass valid authentications
		retailerPage.setUsername( process.env.USERNAME )
		retailerPage.setPassword( process.env.PASSWORD )
		// Click Continue Button
		retailerPage.clickContinueButton().click()
		// sometimes we need explicit wait
		browser.pause( 4000 )
		// verifies the phone number textbox is present
		browser.isVisible( retailerPage.verifyInputBox() )
		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer/preapproval/phone" )
	} )
} )