"use strict"
	// This test is an End to End Pre-approval test for Brick & Mortar Flow

describe( "Get Pre-Approved App BM flow", () => {
	var retailerPage = require( "../pages/retailerPage.js" ),
		billingPage = require( "../pages/billingPage.js" ),
		incomePage = require( "../pages/incomePage.js" ),
		utilsPage = require( "../pages/utils.js"),
		reviewPage = require( "../pages/reviewInfoPage.js"),
		dbObj = require( "./../pages/dbClient.js"),
		flag = true
		
	it( "New Retailer Pre-Approval Checkout", () => {
		retailerPage.get();
		utilsPage.switchToIframe( ".iframe-container > iframe " )
		// click retailer login
		retailerPage.getRetailerLogin().click()
		// pass valid authentications
		retailerPage.setUsername( process.env.PF_OFF_USERNAME )
		retailerPage.setPassword( process.env.PF_OFF_PASSWORD )
		// Click Continue Button here
		retailerPage.clickContinueButton().click()
		browser.waitUntil(() => {
			return browser.getUrl().includes('/login')
		  }, 10000, "Url doesn't include /login")
		
		browser.waitForVisible( "[name='phone']", 10000 )
		retailerPage.sendVerificationCode( process.env.PHONE )
		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer/preapproval/phone" )
		retailerPage.checkCreditPolicy().click()
		retailerPage.checkPrivacyPolicy().click()
	
		// Click Continue Button Here
		retailerPage.clickContinueButton().click()

		browser.waitUntil(() => {
			return browser.getUrl().includes('/preapproval/verification')
		  }, 20000, "Url doesn't include /verification")

		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer" )
	
		// // Get Verification code from DB
		// var row = dbObj.runQuery( process.env.DB_CONNECTION_STAGE , process.env.PHONE )
		// row.then(( res 	) => retailerPage.verifyCode( res.code ), 20000 )
	
		// Get Verification code from DB
			
		// This is the DB query to retrieve verification code from DB, Currently Matt stage accepts random number
		// bypassing this.
		//var row = dbObj.runQuery( process.env.DB_CONNECTION_STAGE , process.env.PHONE )
		//row.then(( res 	) => retailerPage.verifyCode( res.code ), 50000 )
		retailerPage.verifyCode( "123456" )
			
		// Click Begin Application
		retailerPage.clickBegin().click()
		
		// Billing Information Starts here
		billingPage.setBillingDetails( flag )
		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer/preapproval/billing/" )
		retailerPage.clickContinueButton().click()
		
		// We need verification step here but skipping for now due to time.
		
		// Review & Submit - the xpath here is temporary due to timing constraints
		browser.waitForVisible("//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[3]/button", 10000)
		$("//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[3]/button").click()
		
		browser.waitUntil(() => {
			return browser.getUrl().includes( "/preapproval/approved" )
		  }, 50000, "Url doesn't include Approved" )
		expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/preapproval/approved" )
	} )
} )
