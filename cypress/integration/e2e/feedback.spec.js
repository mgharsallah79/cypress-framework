import FeedbackPage from "../../page-objects/pages/FeedbackPage"

describe('make a feedback using fixtures', () => {
	before(function () {
		FeedbackPage.load()
		
	})

	it('it should fill the feedback form with data from fixture', () => {
		FeedbackPage.submitFeedback()
	})
})