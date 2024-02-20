describe('POST Request Test', () => {
    it('should make a POST request to create a user', () => {
      // Send a POST request to the specified URL with the given data
      cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          name: 'morpheus',
          job: 'leader'
        }
      }).then((response) => {
        // Check if the request was successful (status code 201)
        expect(response.status).to.eq(201);
  
        // Log the response body
        cy.log(JSON.stringify(response.body));
      });
    });
  });