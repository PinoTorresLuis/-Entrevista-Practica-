export default class ChallengeModel5{
    mobile_MotoG13 = '[data-id="16702"]';
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
        
    //Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras.    
    findMobilePhone(){
       cy.get(this.mobile_MotoG13).should('be.visible');
           cy.contains('Moto G13 128Gb 4G').click();
           cy.get(this.btn_select).click();
    }
    checkout_item(){
        cy.get(this.cart_text).should('have.text','Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras.')
        cy.get(this.btn_next_step).click();
    }

    complete_Form(){
        cy.get(this.form).should('be.visible').then(()=>{
            cy.get(this.email).type('test1@gmail.com');
            cy.get(this.name).type('luis');
            cy.get(this.last_name).type('pino');
            cy.get(this.dni).type('38662061');
            cy.get(this.btn_purchase).click()
            cy.get(this.msg_alert).should('be.visible').then(()=>{
                cy.screenshot('mensaje de error al no completar el formulario');
            });
        });
    
    }

}
