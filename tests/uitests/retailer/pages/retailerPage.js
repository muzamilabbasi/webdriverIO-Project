"use strict"

	// This page holds generic information of the element for the whole Brick & Mortar App

var RetailerPage = {
	/**
	 * Navigates to * Login Page
	 */
	get : () => {
		browser.url( "/login" );
	},
	
	/**
	 * Click Login On Retailer Frame
	 */
	getRetailerLogin : () => {
		browser.waitForVisible( "a.button" )
		return $( "a.button" )
	},

	/**
	 * set the Retailer username
	 * @param username is the default parameter
	 */
	setUsername : ( username ) => {
		$( "[name='username']" ).click()
		browser.clearElement( "[name='username']" )
		$( "[name='username']" ).keys( username )
	},

	/**
	 * set the Retailer password
	 * @param password is the default parameter
	 */
	setPassword : ( password ) => {
		$( "[name='password']" ).click()
		browser.clearElement( "[name='password']" )
		$( "[name='password']" ).keys( password )
	},

	/**
	 * Click Continue Button
	 */
	clickContinueButton : () => {
		browser.waitForVisible( ".not-loading", 20000 )
		return $( ".not-loading" )
	},

	/**
	 * get Error Message
	 */
	getErrorStatus : () => {
		browser.waitForText( ".agreement-error", 10000 )
		return browser.getText( ".agreement-error" )
	},

	/**
	 * return Input Box for Phone Number
	 */
	verifyInputBox : () => {
		return ".input-wrap"
	},

	/**
	 * Send verification code to Phone Number
	 * @param phoneNumber is the default parameter
	 */
	sendVerificationCode : ( phoneNumber ) => {
		$( ".input-wrap" ).keys( phoneNumber )
	},

	/**
	 * Check Privacy Policy
	 */
	checkPrivacyPolicy : () => {
		browser.waitForVisible("[ng-model='phone.verification.privacyPolicy']", 10000)
		return $( "[ng-model='phone.verification.privacyPolicy']" )
	},

	/**
	 * Check Credit Policy
	 */
	checkCreditPolicy : () => {
		browser.waitForVisible("[ng-model='phone.verification.creditCheck']", 10000)
		return $( "[ng-model='phone.verification.creditCheck']" )
	},

	/**
	 * Enter Verification Code
	 * @param verificationCode is the default parameter
	 */
	verifyCode : ( verificationCode ) => {
		browser.waitForVisible( "[ng-model='verification.verification.code']", 20000)
		$( "[ng-model='verification.verification.code']" ).click().keys( verificationCode )
	},

	/**
	 * click Begin
	 */
	clickBegin : () => {
		browser.waitForVisible( "#app-preapproval .plugin-actions button", 10000 )
		return $( "#app-preapproval .plugin-actions button" )
	},

	/**
	 * get Denied Message
	 */
	getDeniedMessage : () => {
		return $( ".plugin-message-text p" )
	},

	/**
	 * set reset user phone number
	 * @param number is the default number
	 */
	setUserResetNumber : ( number ) => {
		browser.waitForVisible( "[name='vm.resetForm'] input", 20000 )
		$( "[name='vm.resetForm'] input" ).click().keys( number )
	}
}
module.exports = RetailerPage
