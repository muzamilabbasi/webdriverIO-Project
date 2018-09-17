"use strict"

	// This page holds elements for Review Information Page for Brick & Mortar App
	
var ReviewInformationPage = {
	/**
	 * get Name
	 * @returns WebElement
	 */
	getName : () => {
		browser.waitForVisible( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[2]/table/tbody/tr[1]/td[2]" )
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[2]/table/tbody/tr[1]/td[2]" )
	},

	/**
	 * get DOB
	 * @return WebElement
	 */
	getDOB : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[2]/table/tbody/tr[2]/td[2]" )
	},

	/**
	 * get SSN
	 * @return WebElement
	 */
	getSSN : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[2]/table/tbody/tr[3]/td[2]" )
	},

	/**
	 * get Email
	 * @return WebElement
	 */
	getEmail : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[2]/table/tbody/tr[4]/td[2]" )
	},

	/**
	 * get Address
	 * @return WebElement
	 */
	getAddress : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[2]/table/tbody/tr[5]/td[2]" )
	},

//income information section

	/**
	 * get Yearly income
	 * @return WebElementd
	 */
	getYearlyIncome : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[3]/div[2]/table/tbody/tr[1]/td[2]" )
	},

	/**
	 * get pay frequency
	 * @return WebElementd
	 */
	getPayFrequency : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[3]/div[2]/table/tbody/tr[2]/td[2]" )
	},

	/**
	 * get last pay day
	 * @return WebElementd
	 */
	getLastPayDay : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[3]/div[2]/table/tbody/tr[3]/td[2]" )
	},

	/**
	 * get next pay day
	 * @return WebElementd
	 */
	getNextPayDay : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[3]/div[2]/table/tbody/tr[4]/td[2]" )
	},

	/**
	 * get direct deposit
	 * @return WebElementd
	 */
	getDirectDeposit : () => {
		return $( "//*[@id='app-preapproval']/div[1]/div/div/div/div[3]/div[2]/div/div/section/div/div/div[3]/div[2]/table/tbody/tr[5]/td[2]" )
	},
}
module.exports = ReviewInformationPage
