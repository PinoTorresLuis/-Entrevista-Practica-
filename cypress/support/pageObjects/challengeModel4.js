export default class challengeModel4{
    mobile = '#maincontent > div.columns > div > div:nth-child(3) > div:nth-child(5) > div > div > div.content-products > div > ol > li:nth-child(1)';
    btn_select = '#swatch_attribute_card';
    cart_text = '[data-ui-id="checkout-cart-validationmessages-message-success"]';
    btn_purchase = '[data-role="proceed-to-checkout"]';
    btn_showCart = '.showcart';
    btn_homepage = '.logo > img';
    delet_product = '.product-item-details > .actions > .secondary > .action';
    confirm_delet = '.action-primary';
    count_number = '.counter-number';
           
    findMobilePhone(){
       cy.get(this.mobile).should('be.visible').click();
       cy.get(this.btn_select).click();
   
    }
    checkout_cart(){
       cy.get(this.cart_text).should('have.text','Añadiste Samsung Galaxy A04 64GB a tu carrito de compras.')
       cy.get(this.btn_homepage).should('be.visible').click();
     
    }
    delet_cart(){
       cy.get(this.btn_showCart).should('be.visible').click()
       cy.get(this.delet_product).should('be.visible').click();
       cy.get(this.confirm_delet).click();
        
    }
    checkout_cart_empty(){
       cy.get(this.count_number).should('not.be.visible');
       cy.screenshot('Contador del carrito vacio');
    }


}
