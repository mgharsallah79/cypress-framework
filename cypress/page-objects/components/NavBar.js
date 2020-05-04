export default class NavBar {
	static clickOnLogo() {
		cy.get('.brand').click
	}

	static search(text) {
		cy.get('#searchTerm').type('${text} {enter}')
	}

	static clickOnSignIn() {
		cy.get('#signin_button').as('SignInBtn').click()
		//cy.get('@SignInBtn').click()
	}

	static clickSettings() {
		cy.contains('Settings').click()
	}

	static logout() {
		cy.contains('username').click()
		cy.get('#logout_link').click()
	}

	static checkSignInButtonIsVisible() {
		cy.get('@SignInBtn').should('be.visible')
	}
}
