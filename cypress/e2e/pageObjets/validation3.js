export default class validacionPruebas3{
    tercer_equipo ='[data-id="12784"] > a';
    boton_calcular_cuotas ='#open-installments-modal';
    modal_pago_cuotas ='#installments-modal > .content';
    banco_selector ='#bankSelector';
    tarjeta_selector ='#cardSelector';
    calcular_cuotas ='#calculate_btn > .btn-primary';
    banco_credicoop ='#ui-id-21';
    tarjeta_visa = '[data-card="Visa"]';
    tabla_cuotas = '#bodyTable';

    getTercerEquipo(){
        return cy.get(this.tercer_equipo).click();
    }
    getBotonCuotas (){
        return cy.get(this.boton_calcular_cuotas).click();
    }
    seleccionar_banco_y_tarjeta(){
        return cy.get(this.modal_pago_cuotas).should('be.visible').then(()=>{
            cy.get(this.banco_selector).click();
            cy.get(this.banco_credicoop).should('exist').click();
            cy.get(this.tarjeta_selector).click();
            cy.get(this.tarjeta_visa).should('exist').click();
            cy.get(this.calcular_cuotas).click()
        })
    }

    calcular_Cuotas(){
        let cuotas_60 =false;
        cy.get(this.tabla_cuotas)
        .find('tr')
        .each((row) => {
            cy.wrap(row)
                .find('td')
                .eq(0)
                .then((cell) => {
                    if (cell.text() === '60 cuotas sin interés de') {
                        cuotas_60 = true;
                        cy.log('Se encontraron 60 cuotas sin interés');
                    }
                });
        })
        .then(() => {
            if(!cuotas_60){
                cy.log('Banco Credicop y tarjeta Visa no poseen 60 cuotas');
            }
            cy.screenshot('cuotas_60'); 
        });
        
    }

}

