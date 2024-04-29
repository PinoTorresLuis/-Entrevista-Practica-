export default class challengeModel4{
    mobile_MotoG13 = '[data-id="16702"]';
    btn_select = '#swatch_attribute_card';
    cart_text = '[data-ui-id="checkout-cart-validationmessages-message-success"]';
    btn_purchase = '[data-role="proceed-to-checkout"]';
    btn_showCart = '.showcart';
    btn_homepage = '.logo > img';
    delet_product = '.product-item-details > .actions > .secondary > .action';
    confirm_delet = '.action-primary';
    count_number = '.counter-number';
        
    //Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras.    
    findMobilePhone(){
       cy.get(this.mobile_MotoG13).should('be.visible')
           cy.contains('Moto G13 128Gb 4G').click();
           cy.get(this.btn_select).click();
   
    }
    checkout_cart(){
       cy.get(this.cart_text).should('have.text','Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras.')
        cy.get(this.btn_homepage).should('be.visible').click();
     
    }
    delet_cart(){
       cy.get(this.btn_showCart).should('be.visible').click()
       cy.get(this.delet_product).should('be.visible').click();
       cy.get(this.confirm_delet).should('be.visible').click();
        
    }

    checkout_cart_empty(){
       cy.get(this.count_number).should('not.be.visible');
    }


}
