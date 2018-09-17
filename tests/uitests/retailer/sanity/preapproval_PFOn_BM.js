"use strict"
	
	/** 
	 * This test only gets a user preapproved with Payment Frequency on
	 * QA Ticket
	 * Author: Muzamil Abbasi
	 **/

describe( "Get Pre-Approved App BM flow", () => {
	var retailerPage = require( "../pages/retailerPage.js" ),
		billingPage = require( "../pages/billingPage.js" ),
		incomePage = require( "../pages/incomePage.js" ),
		utilsPage = require( "../pages/utils.js"),
		reviewPage = require( "../pages/reviewInfoPage.js"),
		dbObj = require( "./../pages/dbClient.js")
		
	it( "New Retailer Pre-Approval Checkout", () => {
		retailerPage.get();
		utilsPage.switchToIframe( ".iframe-container > iframe " )
		// click retailer login
		retailerPage.getRetailerLogin().click()
		// pass valid authentications
		retailerPage.setUsername( process.env.USERNAME )
		retailerPage.setPassword( process.env.PASSWORD )
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
		  }, 10000, "Url doesn't include /verification")

		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer" )
	
		// // Get Verification code from DB
		// var row = dbObj.runQuery( process.env.DB_CONNECTION_STAGE , process.env.PHONE )
		// row.then(( res 	) => retailerPage.verifyCode( res.code ), 8000 )
	
		// Get Verification code from DB
			
		// This is the DB query to retrieve verification code from DB, Currently Matt stage accepts random number
		// bypassing this.
		//var row = dbObj.runQuery( process.env.DB_CONNECTION_STAGE , process.env.PHONE )
		//row.then(( res 	) => retailerPage.verifyCode( res.code ), 50000 )
		retailerPage.verifyCode( "123456" )
			
		// Click Begin Application
		retailerPage.clickBegin().click()
		
		// Billing Information Starts here
		billingPage.setBillingDetails()
		expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer/preapproval/billing/" )
		retailerPage.clickContinueButton().click()
		
		// Income information starts here
		incomePage.setIncomeDetails()
		expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/preapproval/income" )
		retailerPage.clickContinueButton().click()
		
		// Verify Basic Infomation Here		
		expect( reviewPage.getName().getText()).toEqual( "Tester Tester" )
		expect( reviewPage.getDOB().getText()).toContain( "2/2/1985" )
		expect( reviewPage.getSSN().getText()).toContain( "xxx-xx-9803" )
		expect( reviewPage.getEmail().getText()).toEqual( process.env.EMAIL_ADDRESS )
		//expect( reviewPage.getAddress().getText()).toContain( "2590 Cliffside Drive" 
		//+ "\nFloor 9" 
		//+ "\nNew York, NY 10001" )
		expect( reviewPage.getYearlyIncome().getText()).toEqual( "$50,000.00" )
		expect( reviewPage.getPayFrequency().getText()).toContain( "Monthly" )
		expect( reviewPage.getLastPayDay().getText()).toContain( process.env.LASTPAYDAY )
		expect( reviewPage.getNextPayDay().getText()).toContain( process.env.NEXTPAYDAY )
		expect( reviewPage.getDirectDeposit().getText()).toEqual( process.env.DIRECTDEPOSIT )
		expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/preapproval/review" )
		
		retailerPage.clickContinueButton().click()
		browser.waitUntil(() => {
			return browser.getUrl().includes( "/preapproval/approved" )
		  }, 50000, "Url doesn't include Approved" )
		expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/preapproval/approved" )
	} )
} )
