describe('Suite 1 - Cenário Positivo', () => {

    const weather_conditions = ['"Thunderstorm"', '"Drizzle"', '"Rain"', '"Snow"', '"Atmosphere"', '"Clear"', '"Clouds"']

    it.only('API - Status 200', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?lat=-23.621986&lon=-46.86509&appid=b39b1cbac98954db9c513df26ecfb4dc&units=metric',
            failOnStatusCode: false,
        }).as('details')

        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            expect(JSON.stringify(response.body['weather'])).not.to.be.empty
            const weather = JSON.stringify(response.body['weather'][0]['main'])
            expect(weather_conditions).to.contain(weather)
        })
    })

    it.only('API - Cidade', () => {
        cy.request({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=rio+de+janeiro&appid=b39b1cbac98954db9c513df26ecfb4dc&units=metric',
            failOnStatusCode: false,
        }).as('details')

        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.get('@details').then((response) => {
                expect(JSON.stringify(response.body['weather'])).not.to.be.empty
                const weather = JSON.stringify(response.body['weather'][0]['main'])
                expect(weather_conditions).to.contain(weather)

            })
        })
    })
})
