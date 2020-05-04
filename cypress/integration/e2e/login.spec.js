import { url, login_username, login_password } from '../../../config'
import NavBar from '../../page-objects/components/NavBar'
import LoginPage from '../../page-objects/pages/LoginPage'
import AccountLinks from '../../page-objects/components/AccountLinks'

describe('Login Failed Test', () => {
	before(function () {
		cy.visit(url)
		NavBar.clickOnSignIn()
	})

	it('it should try to login with invalid credentials', () => {
		LoginPage.login('kiki', 'KOKO')
		LoginPage.displayErrorMessage()
	})
})

describe('Login Successful', () => {
	before(function () {
		cy.visit(url)
		NavBar.clickOnSignIn()
	})

	it.only('it should login into application', () => {
        LoginPage.login(login_username, login_password)
        AccountLinks.openAccountLink('Pay Bills')
        NavBar.logout()
        NavBar.checkSignInButtonIsVisible()
	})
})
