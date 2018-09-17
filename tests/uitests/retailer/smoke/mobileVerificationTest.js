"use strict"

describe( "Mobile Verification Tests", function() {
	var retailerPage = require( "../pages/retailerPage.js" ),
		utilsPage = require( "../pages/utils.js"),
		dbObj = require( "./../pages/dbClient.js")
        
	it( "Send Customer Code", function() {
		retailerPage.get();
		// switch into retailer iframe
		utilsPage.switchToIframe( ".iframe-container > iframe " )
		// click retailer login
		retailerPage.getRetailerLogin().click()
		// pass valid authentications
		retailerPage.setUsername( process.env.USERNAME )
		retailerPage.setPassword( process.env.PASSWORD )
		// Click Continue Button here
		retailerPage.clickContinueButton().click()

		// sometimes we need explicit wait
		browser.pause( 5000 )
		browser.isVisible( retailerPage.verifyInputBox() )
		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer/preapproval/phone" )

		retailerPage.sendVerificationCode( process.env.PHONE )
		retailerPage.checkPrivacyPolicy().click()
		retailerPage.checkCreditPolicy().click()
		// Click Continue Button Here
		retailerPage.clickContinueButton().click()
		browser.pause( 3000 )
		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer/preapproval/verification" )
        
		// Get Verification code from DB
		browser.pause( 6000 )
		var row = dbObj.runQuery( process.env.DB_CONNECTION_STAGE , process.env.PHONE )
		row.then(( res 		) => retailerPage.verifyCode( res.code ),
		browser.pause( 6000 ) )

		// Click Begin Application
		retailerPage.clickBegin().click()
		browser.pause(3000)
		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer/preapproval/billing/" )
	} )
} )
 