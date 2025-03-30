describe('Acessando privacy independente',()=>{
    beforeEach(()=>{
      cy.visit('./src/privacy.html')
    }),
    it.only('Verificando test',()=>{
      cy.get('#title').should('be.visible')
      cy.get('#white-background').should('be.visible')
      cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
      cy.contains('p', 'Não salvamos dados submetidos no formulário da aplicação CAC TAT.')
      cy.contains('p', 'Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.')
      cy.contains('p', 'No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.')
      cy.contains('p', 'Talking About Testing')
  })
  
  })