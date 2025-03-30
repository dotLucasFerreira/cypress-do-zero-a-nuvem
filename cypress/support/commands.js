// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ()=>{
    cy.get('input[name="firstName"]').type('Lucas'),
    cy.get('input[name="lastName"]').type('Ferreira'),
    cy.get('input[type="email"]').type('lucas@exemplo.com'),
    cy.get('label[for="open-text-area"]').type('No objeto de options que podemos passar ao comando .type(), é possível sobrescrever o delay padrão por outro valor (em milissegundos).',{delay: 0})
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('camposcomconst', dados=>{
    cy.get('#firstName').type(dados.firstName),
    cy.get('#lastName').type(dados.lastName),
    cy.get('#email').type(dados.email),
    cy.get('#open-text-area').type('dados.text',{delay: 0}),
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('valorespadroes', (dadospadroes = {
    firstName:'Lucas',
    lastName:'Ferreira',
    email:'lucas@padrao.com',
    text:'alou padrao'
}) =>{
    cy.get('#firstName').type(dadospadroes.firstName),
    cy.get('#lastName').type(dadospadroes.lastName),
    cy.get('#email').type(dadospadroes.email),
    cy.get('#open-text-area').type(dadospadroes.text, {delay: 0})
    cy.contains('.button', 'Enviar').click()
})
