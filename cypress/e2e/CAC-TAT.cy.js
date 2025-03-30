// describe('Central de Atendimento ao Cliente TAT', ()=> {
//   it('verifica o titulo da aplicação',() =>{
//     cy.visit('./src/index.html'),
//     cy.title().should(`be.equal`, `Central de Atendimento ao Cliente TAT`)
//   })
// })

//Atividade 1
describe(' Central de Atentimento TAT', ()=>{
  beforeEach(()=> {
    cy.visit('./src/index.html')
  }),
  it('Preenchimentos obrigatórios',()=>{
    cy.get('input[name="firstName"]').type('Lucas'),
    cy.get('input[name="lastName"]').type('Ferreira'),
    cy.get('input[type="email"]').type('lucas@exemplo.com'),
    cy.get('label[for="open-text-area"]').type('No objeto de options que podemos passar ao comando .type(), é possível sobrescrever o delay padrão por outro valor (em milissegundos).',{delay: 0})
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
// Atividade extra 2
  it('Email inválido',()=>{
    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Ferreira')
    cy.get('#email').type('lucas213.com')
    cy.get('#open-text-area').type('No objeto de options que podemos passar ao comando .type(), é possível sobrescrever o delay padrão por outro valor (em milissegundos).')
    cy.get('button[type="submit"]').click()
    cy.get('.error').should('be.visible')
  })
  
  //Atividade 3
  it('Valor numerico valido telefone', ()=>{
    cy.get('#phone').type('abc').should('have.value','')
  })

//Atividade 4
  it('Telefone obrigatorio', ()=> {
    cy.get('#firstName').type('Lucas'),
    cy.get('#lastName').type('Ferreira'),
    cy.get('#email').type('lucas@email.com'),
    cy.get('#phone-checkbox').click()
    cy.contains('.button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  //Atividade 5
  it('Preencher e limpar campos', ()=>{
    cy.get('#firstName').type('Lucas').should('have.value','Lucas').clear().should('have.value', ''),
    cy.get('#lastName').type('Ferreira').should('have.value','Ferreira').clear().should('have.value', ''),
    cy.get('#email').type('lucas@email.com'),
    cy.get('#phone').type('2199999999')
  })

  //Atividade 6
  it('Erro ao deixar formulário em branco',()=> {
    cy.contains('.button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })
  it('Preenchimento com Custom comand',()=>{
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })

  it('Utilizando contains', ()=>{
    const dados = {
      firstName:'Isa',
      lastName: 'Ferreira',
      email:'isa@email.com',
      phone:'219999999',
      text:'asdgasiew'
    }
    cy.camposcomconst(dados)
  })


  it('Utilizando dados padroes',()=>{
    cy.valorespadroes()
    
  })
  
  it('Seleçao produto Youtube pelo texto', () =>{
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
  })

  it('Produto mentoria por value', ()=>{
    cy.get('#product').select('mentoria').should('have.value','mentoria')
  })

  it('Produto mentoria por indice', ()=>{
    cy.get('#product').select([1]).should('have.value','blog')
  })

  it('Marcar tipo atendimento FeedBack', () => {
    cy.get('input[type="radio"]').check('feedback')
  })

  it('Marcando cada tipo de atendimento', ()=>{
    cy.get('input[type="radio"]')
    .each((typeofSe)=>{
      cy.wrap(typeofSe)
      .check()
      .should('be.checked')
    })
  })
  it('Marcando e desmarcando checkbox', ()=>{
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').uncheck()
  })

  it('Marcando todos check e desmarcando o ultimo', ()=>{
    cy.get('input[type="checkbox"]').check()
    cy.get('input[type="checkbox"]').last().uncheck()
  })
  it('Verificando telefone', ()=>{
    cy.get('#firstName').type('Lucas'),
    cy.get('#lastName').type('Ferreira'),
    cy.get('#email').type('lucas@email.com'),
    cy.get('#open-text-area').type('aosdhfoag ofiwefwefpweoifowefbw0')
    cy.get('#phone-checkbox').check()
    cy.contains('.button', 'Enviar').click()
    cy.get('input[type="checkbox"]').last().uncheck()  
    cy.contains('.button', 'Enviar').click()
  })
it('Importando arquivo', ()=>{
  cy.get('input[type="file"]').selectFile('cypress/fixtures/example.json').should('be.visible', 'example.json')

  cy.get('#file-upload')
  .should(input=>{
    expect(input[0].files[0].name).to.equal('example.json')
  })
})
it('selecionando arquivo simulando drag-drop',()=>{
cy.get('#file-upload')
.selectFile('cypress/fixtures/example.json', {action:'drag-drop'})
.should(input =>{
  expect(input[0].files[0].name).to.equal('example.json')
})
})

it('fixture com alias', ()=>{
  cy.fixture('example.json').as('jsoinho')
  cy.get('#file-upload').selectFile('@jsoinho')
  .should(input =>{
    expect(input[0].files[0].name).to.equal('example.json')
  })
})

it('Abrindo politica de privacidade sem clique em outra aba', ()=>{
  cy.get('a[href="privacy.html"]').should('have.attr', 'target', '_blank')
})

it('Abrindo politica de privacidade sem clique em outra aba2', ()=>{
  cy.contains('a', 'Política de Privacidade')
  .should('have.attr', 'href', 'privacy.html')
  .and('have.attr', 'target', '_blank')
})



it('removendo a target e clicando no link',()=>{
  cy.get('#privacy')
  .invoke('removeAttr', 'target')
})

it('removendo a target no link 2',()=>{
  cy.contains('a', 'Política de Privacidade')
  .invoke('removeAttr', 'target')
  .click()
  cy.contains('h1', 'CAC TAT - Política de Privacidade')
  .should('be.visible')
})

it('testando a pagida da politica de privacidade de forma independente', ()=>{
  cy.contains('a', 'Política de Privacidade')
  .invoke('removeAttr', 'target')
  .click()
  cy.get('#title').should('be.visible')
  cy.get('#white-background').should('be.visible')
  cy.contains('h1', 'CAC TAT - Política de Privacidade').should('be.visible')
  cy.contains('p', 'Não salvamos dados submetidos no formulário da aplicação CAC TAT.')
  cy.contains('p', 'Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.')
  cy.contains('p', 'No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.')
  cy.contains('p', 'Talking About Testing')
})

})


