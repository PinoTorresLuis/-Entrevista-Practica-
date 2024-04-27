export default class TestValidations4{
    mobile_MotoG13 = '[data-id="16702"]';
    button_select = '#swatch_attribute_card';
    cart_text = '[data-ui-id="checkout-cart-validationmessages-message-success"]';
    button_purchase = '[data-role="proceed-to-checkout"]';
    form = '#shipping';
    email = '#GVNPPM0';
    name = '#Q7SEB2U';
    last_name = '#CKP89KO';
        
    //Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras.    
    findMobilePhone(){
       return cy.get(this.mobile_MotoG13).should('be.visible').then(()=>{
           cy.contains('Moto G13 128Gb 4G').click();
           cy.get(this.button_select).click();
       });
    }
    checkout_item(){
        cy.get(this.cart_text).should('be.visible').then(($cart) => {
            const text = $cart.text();
            if (text.includes('Añadiste Motorola Moto G13 128Gb 4G a tu carrito de compras')) {
                cy.log('Producto agregado correctamente');
                cy.get(this.button_purchase).click();
            } else {
                cy.log('Hubo un error en la selección del producto');
            }
        });
    }

    complete_Form(){
        cy.get(this.form).as('formulario');
        cy.get('@formulario').find(this.email).type('test1@gmail.com');
        cy.get('@formulario').find(this.name).type('luis');
        cy.get('@formulario').find(this.last_name).type('pino');

    }

}