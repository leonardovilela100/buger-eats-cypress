

    class SignuPage {

        go() {
            cy.visit('/') // Visitar a pagina 

            cy.get('a[href="/deliver"]').click() // Fazendo o clicar no botão 
            cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') //should=deve ter o texto

        }

        fillForm(deliver) {
            cy.get('#page-deliver form div input[placeholder="Nome completo"]').type(deliver.name)
            cy.get('#page-deliver form div input[placeholder="CPF somente números"]').type(deliver.cpf)
            cy.get('#page-deliver form div input[placeholder="E-mail"]').type(deliver.email)
            cy.get('#page-deliver form div input[placeholder="Whatsapp"]').type(deliver.whatsapp)
    
            
            cy.get('input[name="postalcode"]').type(deliver.address.postalcode)// Colocando o valor do CEP
            cy.get('input[type=button][value="Buscar CEP"]').click()// Fazendo o clicar no botão de procurar por CEP
            cy.get('input[name="address-number"]').type(deliver.address.number)
            cy.get('input[name="address-details"]').type(deliver.address.details)
            
      //Fazendo a verificação se quando colocou para buscar o cep vai estar os campos preenchidos corretamente
            cy.get('input[name="address"]').should('have.value',deliver.address.street)
            cy.get('input[name="district"]').should('have.value',deliver.address.district)
            cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)
    
        // Fazendo a busca por seletor CSS e usando o cantainer de 3 "Icones", e usando depois o parametro "Moto"
            cy.contains('.delivery-method li', deliver.delivery_method).click()
    
            // Fazendo um upload de um arquivo para colocar no upload da pagina
            cy.get('input[accept="image/*"]').attachFile('/images/' + deliver.cnh)
        }

        submit() {
            cy.get('button[class="button-success"]').click() // Clicando no botão de Cadastre-se para fazer entregas
        }

        modalContentShouldBe(expectedMessage) {
            cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessage ) // Validando se tem esse texto dentro da caixa alert
        }

        alertMessageShouldBe(expectedMessage) {
            //cy.get('[class="alert-error"]').should('have.text', expectedMessage)
            cy.contains('.alert-error', expectedMessage).should('be.visible')

        }
    }

    export default new SignuPage;













    //------------------------------------------------------------------------

      //  before(function(){
  //      cy.log('Tudo aqui é executado uma unica vez ANTES de TODOS os casos de testes. ')
  //  })

  //  beforeEach(function() {
  //      cy.log('Tudo aqui e executado sempre ANTES de CADA caso de teste')
  //  })

  //  after(function(){
  //      cy.log('Tudo aqui é executado uma unica vez DEPOIS de TODOS os casos de testes. ')
  //  })

  //  afterEach(function() {
  //      cy.log('Tudo aqui e executado sempre DEPOIS de CADA caso de teste')
  //  })