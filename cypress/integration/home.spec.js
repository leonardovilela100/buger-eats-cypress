

describe('home page', ()=> {// Definir uma swit de testes
    it('app deve estar online', () =>{ // nome do teste
        cy.viewport(1440, 900)
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats') // função should para validar ->  Dentro do should chamo uma propriedade (have.text)
    })
}) 
