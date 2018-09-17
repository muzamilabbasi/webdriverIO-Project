"use strict"

var checkoutPage = {

	/**
	 * set the sales representative name on the cart
	 * @param representative is the default argument
	 */
	setSalesRep : ( representative ) => {
		$( ".input-wrap [name='salesrep']" ).click().keys( representative )
	},

	/**
	 * set the orderID on cart page
	 * @param orderID is the default argument
	 */
	setOrderID : ( orderID ) => {
		$( ".input-wrap [name='orderId']" ).click().keys( orderID )
	},

	/**
	 * set the retailer price on cart 
	 * @param retailerPrice is the default argument
	 */
	setRetailerPrice : ( retailerPrice ) => {
		$( ".input-wrap [name='retailer_price']" ).click().keys( retailerPrice )	
	},

	/**
	 * set Item Code
	 * @param itemCode is the default parameter
	 */
	setItemCode : ( itemCode ) => {
		$( ".input-wrap [name='item_code']" ).click().keys( itemCode )
	},

	/**
	 * Set Item description
	 * @param itemDescription is the default
	 */
	setItemDescription : ( itemDescription ) => {
		$( ".input-wrap [name='item_name']" ).click().keys( itemDescription )
	},

	/**
	 * Click Add to Cart
	 */
	addToCart : () => {
		return $( "[name='$ctrl.itemForm'] .button" )
	},

	/**
	 * Proceed to checkout
	 */
	checkout : () => {
		return $( ".cart-buttons .button" )
	},

	/**
	 * Add card number
	 * @param cardNumber is the default argument
	 */
	addCard : ( cardNumber ) => {
		$( ".input-wrap [name='CardNumber']" ).click().keys( cardNumber )
	},

	/**
	 * Add Card Expiration
	 * @param expiryDate is the default argument
	 */
	addCardExpiration : ( expiryDate ) => {
		$( ".input-wrap [name='CardExpiration']" ).click().keys( expiryDate )
	},

	/**
	 * Add ccv information
	 * @param ccv is the default parameter
	 */
	addCCV : ( ccv ) => {
		$(".input-wrap [name='CardCvv']").click().keys( ccv )
	},

	/**
	 * check Disclosure
	 */
	checkDisclosure : () => {
		return $( ".checkbox [name='Disclosure']" )
	},

	/**
	 * check contract
	 */
	checkContract : () => {
		return $(".checkbox [name='contract']")
	},

	/**
	 * check merchant
	 */
	checkMerchant : () => {
		return $( ".checkbox [name='Merchant']" )
	},

	/**
	 * Submit the payment
	 */
	submitPayment : () => {
		return $( ".section .payment-button-submit" )
	}	
}
module.exports = checkoutPage
