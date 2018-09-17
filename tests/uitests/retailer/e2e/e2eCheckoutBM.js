"use strict"
	/** 
	 * This test is an End to End Pre-approval test for Brick & Mortar Flow
	 * QA Ticket 
	 * Author: Muzamil Abbasi
	 **/
	
describe( "Get Pre-Approved App BM flow", () => {
	var retailerPage = require( "../pages/retailerPage.js" ),
			billingPage = require( "../pages/billingPage.js" ),
			checkoutPage = require( "../pages/checkoutPage.js" ),
			incomePage = require( "../pages/incomePage.js" ),
			utilsPage = require( "../pages/utils.js"),
			reviewPage = require( "../pages/reviewInfoPage.js"),
			dbObj = require( "./../pages/dbClient.js")

	it( "New Retailer Pre-Approval", () => {
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
				}, 20000, "Url doesn't include /verification")
			expect( browser.getUrl() ).toContain( "/ng/retailer/#/retailer" )
		
			// Get Verification code from DB
			
			// This is the DB query to retrieve verification code from DB, Currently Matt stage accepts random number
			// bypassing this.
			//var row = dbObj.runQuery( process.env.DB_CONNECTION_STAGE , process.env.PHONE )
			//row.then(( res 	) => retailerPage.verifyCode( res.code ), 50000 )

			browser.pause( 2500 )
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
			expect( reviewPage.getAddress().getText()).toContain( "2590 Cliffside Drive" 
			+ "\nFloor 9" 
			+ "\nThe Lakes, NV 88901" )
			expect( reviewPage.getYearlyIncome().getText()).toEqual( "$50,000.00" )
			expect( reviewPage.getPayFrequency().getText()).toContain( "Monthly" )
			expect( reviewPage.getLastPayDay().getText()).toContain( process.env.LASTPAYDAY )
			expect( reviewPage.getNextPayDay().getText()).toContain( process.env.NEXTPAYDAY )
			expect( reviewPage.getDirectDeposit().getText()).toEqual( process.env.DIRECTDEPOSIT )
			expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/preapproval/review" )
			
			retailerPage.clickContinueButton().click()
			browser.waitUntil(() => {
				return browser.getUrl().includes( "/preapproval/approved" )
				}, 70000, "Url doesn't include Approved" )
			expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/preapproval/approved" )
		} )

		it( "Checkout After Pre-Approval", () => {
			retailerPage.clickContinueButton().click()
			browser.waitUntil(() => {
				return browser.getUrl().includes( "/retailer/build-cart" )
				}, 30000, "Url doesn't include /build-cart" )
			expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/build-cart" )
			
			checkoutPage.setSalesRep( "Sales Representative" )
			checkoutPage.setOrderID( "Order 1" )
			checkoutPage.setRetailerPrice( "500.00" )
			checkoutPage.setItemCode( "SKU123" )
			checkoutPage.setItemDescription( "Automated Test Item Addition" )
			checkoutPage.addToCart().click()	
			browser.waitUntil(() => {
				return browser.getText( "span.amount-due" ).includes( "45.00" )
				}, 30000, "Adding Items to Cart Failed!" )
			expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/build-cart" )
			
			// Proceed to checkout
			checkoutPage.checkout().click()
			browser.waitUntil(() => {
				return browser.getUrl().includes( "/payment/info" )
				}, 30000, "Url doesn't include /payment" )
			expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/payment/info" )
		
			checkoutPage.addCard( "4111 1111 1111 1111" )
			browser.pause( 1000 )
			checkoutPage.addCardExpiration( "01/19" )
			checkoutPage.addCCV( "123" )
			
			checkoutPage.checkDisclosure().click()
			checkoutPage.checkMerchant().click()
			
			//this code block is for retailer which has different contract configuration
			
			// checkoutPage.checkContract().click()
			// click zibby contract agreement
			// $("div.agreement-error > a:nth-child(2)").click()
			// let handles = browser.windowHandle
			// browser.waitUntil(() => {
			// 	return browser.switchTab(handles[0])
			// 	}, 30000, "Couldn't get window handle for contract windows,Check if contracts are loaded!" )
			// checkoutPage.checkContract().click()
			// checkoutPage.checkMerchant().click()
			
			checkoutPage.submitPayment().click()
			browser.waitUntil(() => {
				return browser.getUrl().includes( "/payment/success" )
				}, 60000, "Url doesn't include /success" )
			expect( browser.getUrl() ).toContain( "ng/retailer/#/retailer/payment/success" )
		})
} )
