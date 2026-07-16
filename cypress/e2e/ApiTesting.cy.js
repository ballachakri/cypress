describe('Api Testing', () => {

    it('Get request - all users on page 2', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            headers: { 'x-api-key': 'free_user_3E2AjwzxXxcN7w0cCMoFsWQvzQM' },
            qs: { page: 2 }
        }) // close cy.request config FIRST
            .then((response) => { // correct indent & spelling
                expect(response.status).to.eq(200);
                expect(response.status).equal(200); // duplicate check, harmless but can remove
                expect(response.body.page).to.equal(2);
                expect(response.body.data).to.have.length(6);
                expect(response.body.data[0]).to.have.property('id', 7);
                expect(response.body.data[0]).to.have.property('first_name', 'Michael');
            });
    });

    // or
    it('Get request by id', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': 'free_user_3E2AjwzxXxcN7w0cCMoFsWQvzQM',
                'Content-Type': 'application/json'
            }
        })
            .its("status")
            .should('equal', 200);

    });


    it('Post request', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'free_user_3E2AjwzxXxcN7w0cCMoFsWQvzQM'
            },
            body: {
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
        })
            .its('status')
            .should('equal', 200);
    });

    // or
    // it('Post request', () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://restful-booker.herokuapp.com/booking',
    //         auth: {
    //             username: 'username',
    //             password: 'password'
    //         },
    //         body: {
    //             id: "some id ",
    //             name: "some name",
    //             salary: 2500
    //         }
    //     })
    //         .its('status')
    //         .should('equal', 201);
    // });

    it('Put request', () => {

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'free_user_3E2AjwzxXxcN7w0cCMoFsWQvzQM'
            },
            body: {
                "name": "morpheus",
                "job": "zion resident"
            }
        })
            .its('status')
            .should('equal', 200);
    });

    it('Delete request', () => {

        cy.request({
          method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'free_user_3E2AjwzxXxcN7w0cCMoFsWQvzQM'
            },
        })
            .its('status')
            .should('equal', 204);
    });
});