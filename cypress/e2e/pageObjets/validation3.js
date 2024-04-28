export default class validacionPruebas3{
    third_device ='#maincontent > div.columns > div > div:nth-child(3) > div:nth-child(5) > div > div > div.content-products > div > ol > li:nth-child(3)';
    open_installment ='#open-installments-modal';
    modal_pay_installment ='#installments-modal > .content';
    banco_selector ='#bankSelector';
    tarjeta_selector ='#cardSelector';
    calcular_cuotas ='#calculate_btn > .btn-primary';
    banco_credicoop ='#ui-id-21';
    tarjeta_visa = '[data-card="Visa"]';
    tabla_cuotas = '#bodyTable';

    getThirdDevice(){
        return cy.get(this.third_device).click();
    }
    openInstallmentBtn(){
        return cy.get(this.open_installment).click();
    }
    selectBankAndCard(){
        return cy.get(this.modal_pay_installment).should('be.visible').then(()=>{
            cy.get(this.banco_selector).click();
            cy.get(this.banco_credicoop).should('exist').click();
            cy.get(this.tarjeta_selector).click();
            cy.get(this.tarjeta_visa).should('exist').click();
            cy.get(this.calcular_cuotas).click()
        })
    }

    calculateInstallments(){
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

/* calculateInstallments(){
    cy.get(this.tabla_cuotas)
        .find('tr')
        .then((rows) => {
            const cuotas_60 = Array.from(rows).some((row) => {
                const cellText = Cypress.$(row).find('td').eq(0).text();
                return cellText === '60 cuotas sin interés de';
            });

            expect(cuotas_60, 'Banco Credicop y tarjeta Visa deberían tener 60 cuotas').to.be.true;
        });
} */