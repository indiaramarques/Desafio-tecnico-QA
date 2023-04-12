describe ('Suite 2 - Cadastro', () => {
    it('Cenário 1 - Cadastrar uma nova conta Amazon', () => {
        cy.visit('https://www.amazon.com.br/')
        cy.contains('Contas e Listas').click()
        cy.get('a[id="createAccountSubmit"]').click()
        //Validar que entrou na página (dps)
        cy.get('input[id=ap_customer_name]').type('Indiara Caetano Marques')
        cy.get('input[id=ap_email]').type('indiara@email.com')
        cy.get('input[id=ap_password]').type('Senha1234')
        cy.get('input[id=ap_password_check]').type('Senha1234')
    })
})
