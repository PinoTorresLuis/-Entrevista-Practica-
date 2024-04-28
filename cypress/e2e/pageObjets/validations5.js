export default class TestValidations4{
    mobile_MotoG13 = '[data-id="16702"]';
    button_select = '#swatch_attribute_card';
    cart_text = '[data-ui-id="checkout-cart-validationmessages-message-success"]';
    button_purchase = '.item > .action';
    form = '#checkout';
    email = '[name="custom_email"]';
    name = '[name="firstname"]';
    last_name ='[name="lastname"';
        
    //Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras.    
    findMobilePhone(){
       return cy.get(this.mobile_MotoG13).should('be.visible').then(()=>{
           cy.contains('Moto G13 128Gb 4G').click();
           cy.get(this.button_select).click();
       });
    }
    checkout_item(){
        cy.get(this.cart_text).should('have.text','Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras.')
        cy.get(this.button_purchase).click();
      
    }

    complete_Form(){
        cy.get(this.form).should('be.visible').then(()=>{
            cy.get(this.email).find(this.email).type('test1@gmail.com');
            cy.get(this.name).type('luis');
            cy.get(this.last_name).type('pino');
        });
    }

}
/* 
cy.get(this.cart_text).should('be.visible').then(($cart) => {
    const text = $cart.text();
    if (text.includes('Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compra')) {
        cy.log('Producto agregado correctamente');
        cy.get(this.button_purchase).click();
    } else {
        cy.log('Hubo un error en la selección del producto');
    }
}) */