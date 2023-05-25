describe('template spec', () => {
	it('passes', () => {
		cy.visit('http://localhost:3000');

		// select album option
		cy.get('[data-cy="search-bar_select"]').select('Album');

		// get input field, focus, type
		cy.get('[data-cy="search-bar_input"]').focus().type('album test');

		// click submit
		cy.get('[data-cy="search-bar_submit-btn"]').click({ force: true });

		// find album test in table and assert existence
		cy.contains('album test').should('exist');
	});
});
