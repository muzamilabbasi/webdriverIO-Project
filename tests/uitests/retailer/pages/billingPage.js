"use strict"

	// This page holds elements for Billing Information Page for Brick & Mortar App

var BillingPage = {
	/**
	 * set billing first name
	 * @param firstName is default parameter
	 */
	setFirstName : ( firstName ) => {
		browser.waitForVisible( ".input-wrap [ng-model='billing.info.billing_first_name']", 20000 )
		$( ".input-wrap [ng-model='billing.info.billing_first_name']" ).click().keys( firstName )
	},

	/**
	 * set billing last name
	 * @param lastName is default parameter
	 */
	setLastName : ( lastName ) => {
		$( "[ng-model='billing.info.billing_last_name']" ).click().keys( lastName )
	},

	/**
	 * set dob
	 * @param dob is default parameter 
	 */
	setDOB : ( dob ) => {
		$( "[ng-model='billing.info.dob']" ).click().keys( dob )
	},

	/**
	 * set SSN
	 * @param ssn is default parameter
	 * */
	setSSN : ( ssn ) => {
		$( "[ng-model='billing.info.ssn']" ).click().keys( ssn )
	},

	/**
	 * set email
	 * @param email is default parameter
	 */
	setEmail : ( email ) => {
		$( "[ng-model='billing.info.email']" ).click().keys( email )
	},

	/**
	 * set billing address 
	 * @param billingAddress is default parameter
	 */
	setAddressOne : ( billingAddress ) => {
		$( "[ng-model='billing.info.billing_address']" ).click().keys( billingAddress )
	},

	/**
	 * set billing address two 
	 * @param billingAddressTwo is default parameter
	 */
	setAddressTwo : ( billingAddressTwo ) => {
		$( "[ng-model='billing.info.billing_address2']" ).click().keys( billingAddressTwo )
	},

	/**
	 * set billing city
	 * @param city is default parameter
	 */	
	setBillingCity : ( city ) => {
		$( "[ng-model='billing.info.billing_city']" ).click().keys( city )
	},

	/**
	 * set billing state
	 * @param state is default parameter
	 */
	setBillingState : ( state ) => {
		browser.selectByValue( "[ng-model='billing.info.billing_state']", state );
	},

	/**
	 * set billing zip
	 * @param zip is default parameter
	 */
	setBillingZip : ( zip ) => {
		$( "[ng-model='billing.info.billing_zip']" ).click().keys( zip )
	},

	/**
	 * set billing income 
	 */
	setBillingIncome : ( income ) => {
		browser.waitForVisible( "[ng-model='billing.info.income']", 20000 )
		$( "[ng-model='billing.info.income']" ).click().keys( income )
	},

	/**
	 * Populate the billing details
	 */
	setBillingDetails : ( flag ) => {
		if (  flag == true ){
			BillingPage.setBillingIncome( "50000" )
		}
		BillingPage.setFirstName( process.env.FIRSTNAME )
		BillingPage.setLastName( process.env.LASTNAME )
		BillingPage.setEmail( process.env.EMAIL_ADDRESS )
		BillingPage.setSSN( "189789803" )
		BillingPage.setAddressOne( process.env.ADDRESSONE )
		browser.pause(500)
		BillingPage.setDOB( process.env.DOB )
		BillingPage.setAddressTwo( "Floor 9" )
		BillingPage.setBillingCity( process.env.BILLINGCITY )
		BillingPage.setBillingState( process.env.BILLINGSTATE )
		BillingPage.setBillingZip( process.env.BILLINGZIP )	
	}
}
module.exports = BillingPage
