describe ('Suite 1 - Carrinho de compras', () => {
    it('Cenário 1 - Adicionar 1 produto ao carrinho', () => {
        cy.visit('https://www.amazon.com.br/')
        cy.get('input[id=twotabsearchtextbox]').type('hogwarts legacy PS5')
        cy.get('input[id=nav-search-submit-button]').click()
        cy.get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
        .first().click()
        cy.get('input[id=add-to-cart-button]').click()
        cy.contains('Adicionado ao carrinho')

    })

    it('Cenário 2 - Adicionar 3 produtos ao carrinho', () => {
        cy.visit('https://www.amazon.com.br/')
        cy.get('input[id=twotabsearchtextbox]').type('Jogos PS4')
        cy.get('input[id=nav-search-submit-button]').click()
        cy.get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
        .first().click()
        cy.get('input[id=add-to-cart-button]').click()
        cy.get('input[id=twotabsearchtextbox]').type('PS4 Console')
        cy.get('input[id=nav-search-submit-button]').click()
        cy.get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
        .first().click()
        cy.get('input[id=add-to-cart-button]').click()
        cy.get('input[id=twotabsearchtextbox]').type('Controle PS4')
        cy.get('input[id=nav-search-submit-button]').click()
        cy.get('[data-asin] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus')
        .first().click()
        cy.get('input[id=add-to-cart-button]').click()
        //criar validação de valor
    })

})