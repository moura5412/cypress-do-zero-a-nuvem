Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (name, lastName, email, phone, textArea) => {
    const longText = Cypress._.repeat('lorem ipsum', 10)

    if(name === '' || name === undefined){
        name = 'Gabriel'
    }

    if(lastName === '' || lastName === undefined){
        lastName = 'Silva'
    }

    if(email === '' || email === undefined){
        email = 'teste@teste.com'
    }

    if(phone === '' || phone === undefined){
        phone = '11999999999'
    }

    if(textArea === '' || textArea === undefined){
        textArea = longText
    }

    cy.get('#firstName').type(name);
    cy.get('#lastName').type(lastName);
    cy.get('#email').type(email);
    cy.get('#phone-checkbox').then($checkbox => {
    if ($checkbox.is(':checked')) {
      cy.get('#phone').type(phone);
    }
    });
    cy.get('#open-text-area').type(textArea);
    cy.get('#btnSubmit').click();
    cy.get('.success').should('be.visible');
})