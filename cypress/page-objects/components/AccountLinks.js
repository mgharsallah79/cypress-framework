export default class AccountLinks {

    static clickSummary() {

        cy.get('#account_summary_tab').click()
    }

    static openAccountLink(link) {

        cy.contains(link).click()

    }
}