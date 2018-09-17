"use strict"

	// This page holds elements for Income Information Page for Brick & Mortar App

var IncomePage = {
	/**
	 * set income
	 * @param amount is default parameter
	 */
	setIncome : ( amount ) => {
		browser.waitForVisible( ".input-group [ng-model='$ctrl.info.income']" )
		$( ".input-group [ng-model='$ctrl.info.income']" ).click()
		$( ".input-group [ng-model='$ctrl.info.income']" ).keys( amount )
	},
	
	/**
	 * set pay frequency
	 * @param pfrequency is default parameter
	 */
	setPayFrequency : ( pfrequency ) => {
		browser.selectByValue( ".input-wrap [ng-model='$ctrl.info.pay_frequency']", pfrequency );
	},

	/**
	 * set last pay day
	 * @param lastPayDay is default parameter
	 */
	setLastPayDay : ( lastPayDay ) => {
		$( "[name='last_pay_date']" ).click()
		$( "[name='last_pay_date']" ).keys( lastPayDay )
		browser.pause(1000)
		$( ".ng-scope" ).click()
		$( ".ng-scope" ).click()
		
	},

	/**
	 * set next pay day
	 * @param nextPayDay is default parameter
	 */
	setNextPayDay : ( nextPayDay ) => {	
		$( "[name='next_pay_date']" ).click()
		$( "[name='next_pay_date']" ).keys( nextPayDay )
		browser.pause(1000)
		$( ".ng-scope" ).click()
		$(".ng-scope").click()
	},

	/**
	 * set direct deposit
	 * @param option is default parameter
	 */
	setDirectDeposit : ( option ) => {
		if ( option == "Yes" )
			$( "#direct_deposit_yes" ).click()
		if ( option == "No" )
			$( "#direct_deposit_no" ).click()
	},

	/**
	 * set income details
	 */
	setIncomeDetails : () => {
		
		IncomePage.setIncome( "50000" )
		IncomePage.setDirectDeposit( process.env.DIRECTDEPOSIT )
		IncomePage.setPayFrequency( process.env.PAYFREQUENCY )
		IncomePage.setLastPayDay( process.env.LASTPAYDAY )
		IncomePage.setNextPayDay( process.env.NEXTPAYDAY )
	}
}
module.exports = IncomePage
