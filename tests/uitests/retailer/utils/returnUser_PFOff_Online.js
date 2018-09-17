"use strict"
	// This test does an online checkout

describe( "Get Pre-Approved Online", () => {
	var retailerPage = require( "../pages/retailerPage.js" ),
		billingPage = require( "../pages/billingPage.js" ),
		checkoutPage = require( "../pages/checkoutPage.js" ),
		incomePage = require( "../pages/incomePage.js" ),
		utilsPage = require( "../pages/utils.js"),
		reviewPage = require( "../pages/reviewInfoPage.js"),
		onlinePage = require( "../pages/onlinePage.js"),
		dbObj = require( "./../pages/dbClient.js"),
		flag = true

	it( "Navigate to Online Store - Get Pre-Approved", () => {
		onlinePage.get();
		onlinePage.clickCheckout().click()
		utilsPage.switchToIframe( "iframe" )
		
		// Pre-approval phone number
		onlinePage.sendNumber( process.env.PHONE )
		retailerPage.checkCreditPolicy().click()
		retailerPage.checkPrivacyPolicy().click()
		// Click Continue Button Here
		retailerPage.clickContinueButton().click()
	
		//Get Verification code from DB
		browser.pause( 5000 )

		// resolve a humpty dumpty promise here and get the verification code
		var row = dbObj.runQuery( process.env.DB_CONNECTION_STAGE , process.env.PHONE )
		
		var code = browser.call(function () {
			return row.then(function (result) {
				return result.code
			})
		})
		//send the verified code
		retailerPage.verifyCode( code )
		
		// Click Begin Application
		onlinePage.clickBegin().click()
		 
		//	Billing Information Starts here
		billingPage.setBillingDetails( flag )
		
		// Click Continue After Filling in the details for Billing
		onlinePage.clickContinue().click()

		onlinePage.clickSubmit().click()
		
		// wait until he doesn't respond
		browser.waitForExist( "[button-text='Checkout now'] ", 60000)
	} )
} )
