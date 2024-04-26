export default class validacionPruebas3{
    tercer_equipo ='[data-id="12784"] > a';
    boton_calcular_cuotas ='#open-installments-modal';
    modal_pago_cuotas ='#installments-modal > .content';
    banco_selector ='#bankSelector';
    tarjeta_selector ='#cardSelector';
    calcular_cuotas ='#calculate_btn > .btn-primary';
    banco_credicoop ='#ui-id-155';
    tarjeta_visa = '[data-card="Visa"]'

    getTercerEquipo(){
        return cy.get(this.tercer_equipo).click();
    }
    getBotonCuotas (){
        return cy.get(this.boton_calcular_cuotas).click();
    }
    seleccionar_banco_y_tarjeta(){
        return cy.get(this.modal_pago_cuotas).should('be.visible').then(()=>{
            cy.get(this.banco_selector).click();
            cy.get(this.banco_credicoop).should('exist').click;
            cy.get(this.tarjeta_selector).click();
            cy.get(this.tarjeta_visa).should('exist').click();
        })
    }

    calcular_Cuotas(){
        return cy.get(this.calcular_cuotas).click();
    }

}


/* seleccionar_banco_y_tarjeta(){
    return cy.get(this.banco_selector).type('Credicoop{enter}').then((selector)=>{
        cy.get((selector.tarjeta_selector).type('Visa{enter}'));
    });
    bankCardSelector
} */

/* 
seleccionar_banco_y_tarjeta(){
    return cy.get(this.boton_calcular_cuotas).then((selector)=>{
        cy.get(selector).find(this.banco_selector).contains('Credicoop').should('be.visible').click();
        cy.get(selector).find(this.tarjeta_selector).contains('Visa').should('be.visible').click();
    }) 
} */

