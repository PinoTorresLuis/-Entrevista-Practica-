export default class ChallengeModel5{
    mobile = '#maincontent > div.columns > div > div:nth-child(3) > div:nth-child(5) > div > div > div.content-products > div > ol > li:nth-child(1)';
    btn_select = '#swatch_attribute_card';
    cart_text = '[data-ui-id="checkout-cart-validationmessages-message-success"]';
    btn_next_step = '.item > .action';
    form = '#checkout';
    email = '[name="custom_email"]';
    name = '[name="firstname"]';
    last_name ='[name="lastname"]';
    dni = '[name="custom_attributes[dni]"]';
    btn_purchase='#shipping-method-buttons-container > div > button';
    msg_alert = '.message-notice';
        
        
    findMobilePhone(){
       cy.get(this.mobile).should('be.visible').click();
       cy.get(this.btn_select).click();
    }
    checkout_item(){
        cy.get(this.cart_text).should('have.text','Añadiste Samsung Galaxy A04 64GB a tu carrito de compras.')
        cy.get(this.btn_next_step).click();
    }

    complete_Form(){
        cy.get(this.form).should('be.visible').then(()=>{
            cy.get(this.email).type('test1@gmail.com');
            cy.get(this.name).type('luis');
            cy.get(this.last_name).type('pino');
            cy.get(this.dni).type('38662061');
            cy.get(this.btn_purchase).click();
            cy.get(this.msg_alert).should('be.visible');
        });
    
    }

}
