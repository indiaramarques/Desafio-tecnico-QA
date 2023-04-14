
describe('Suite 2 - Cenários Negativos', () => {

    it.only('API - Missing API Key', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat=-23.6216986&lon=-46.8672509&appid=api_key_aqui&units=metric',
            failOnStatusCode: false,
        }).as('details')

        cy.get('@details').its('status').should('eq', 401)
        cy.get('@details').then((response) => {
            const err_message = JSON.stringify(response.body.message)
            expect(err_message).to.equal('"Invalid API key. Please see https://openweathermap.org/faq#error401 for more info."')
        })
    })

    it.only('API - Latitude Incorreta', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat=-12345&lon=-46.8672509&appid=b39b1cbac98954db9c513df26ecfb4dc&units=metric',
            failOnStatusCode: false,
        }).as('details')

        cy.get('@details').its('status').should('eq', 400)
        cy.get('@details').then((response) => {
            const err_message = JSON.stringify(response.body.message)
            expect(err_message).to.equal('"wrong latitude"')
        })
    })

    it.only('API - Longitude Incorreta', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat=-23.6216986&lon=-11123&appid=b39b1cbac98954db9c513df26ecfb4dc&units=metric',
            failOnStatusCode: false,
        }).as('details')

        cy.get('@details').its('status').should('eq', 400)
        cy.get('@details').then((response) => {
            const err_message = JSON.stringify(response.body.message)
            expect(err_message).to.equal('"wrong longitude"')
        })
    })
})