export default class ChallengeModel3{
    third_device ='#maincontent > div.columns > div > div:nth-child(3) > div:nth-child(5) > div > div > div.content-products > div > ol > li:nth-child(3)';
    open_quotas ='#open-installments-modal';
    modal_pay_quotas ='#installments-modal > .content';
    bank_selector ='#bankSelector';
    card_selector ='#cardSelector';
    calculate_btn ='#calculate_btn > .btn-primary';
    bank_credicoop ='#ui-id-21';
    card_visa = '[data-card="Visa"]';
    table = '#bodyTable';

    getThirdDevice(){
        return cy.get(this.third_device).click();
    }
    openQuotaBtn(){
        return cy.get(this.open_quotas).click();
    }
    selectBankAndCard(){
        return cy.get(this.modal_pay_quotas).should('be.visible').then(()=>{
            cy.get(this.bank_selector).click();
            cy.get(this.bank_credicoop).should('exist').click();
            cy.get(this.card_selector).click();
            cy.get(this.card_visa).should('exist').click();
            cy.get(this.calculate_btn).click()
        })
    }

    calculateQuotas(){
        cy.get(this.table).find('tr').then((rows) => {
            const quota_60 = Array.from(rows).some((row) => {
                const cellText = Cypress.$(row).find('td').eq(0).text();
                return cellText === '60 cuotas sin interés de';
            });
            expect(quota_60, 'Banco Credicop y tarjeta Visa NO deberían tener 60 cuotas').to.be.false;
        });
    }

}

