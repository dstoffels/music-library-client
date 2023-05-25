describe('Add Song', () => {
	it('Opens the add song form and adds a test song', () => {
		cy.visit('http://localhost:3000');

		cy.get('button[data-cy="add-song-toggle-btn"]').click({ force: true });

		cy.get('[data-cy="add-song-input_title"]').focus().type('title test');
		cy.get('[data-cy="add-song-input_artist"]').focus().type('artist test');
		cy.get('[data-cy="add-song-input_album"]').focus().type('album test');
		cy.get('[data-cy="add-song-input_genre"]').focus().type('genre test');
		cy.get('[data-cy="add-song-input_release_date"]').focus().type('1970-01-01');
		cy.get('[data-cy="add-song-input_length"]').focus().type('123');

		cy.get('button[data-cy="add-song-submit"]').click({ force: true });
	});

	it('Deletes the newly added test song', () => {
		cy.visit('http://localhost:3000');

		cy.contains('title test').parent().click();

		cy.get('[data-cy="delete-song-btn"]').click({ force: true });
	});
});
