

function logWelcome() {
  cy.log("Welcome to Cypress Training!")
}

describe('Logging Example', () => {
  it('Logs the welcome message', () => {
    logWelcome();
  }
)
}
)
