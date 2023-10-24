describe('API Test Example', () => {

  it('Verify List of Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1',
    }).then((response) => {
      expect(response.status).to.equal(200); // Check the response status code
      expect(response.body).to.have.property('page', 1); // Check a specific property in the response
      expect(response.body).to.have.property('per_page', 6); // Check a specific property in the response
      expect(response.body.data[0]).to.have.property('email'); // Check the response body contain user email information 
      expect(response.body.data[0]).to.have.property('first_name'); // Check the response body contain user first name information
      expect(response.body.data[0]).to.have.property('last_name'); // Check the response body contain user last name information
    });
  });

  it('Verify Creating New Users', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/users',
      body: {
        name:'morpheus',
        job:'leader'
      }
    }).then((response) => {
      expect(response.status).to.equal(201); // Check the response status code
      expect(response.body).to.have.property('name', 'morpheus'); // Check a specific property in the response
      expect(response.body).to.have.property('job', 'leader'); // Check a specific property in the response
      expect(response.body).to.have.property('id'); // Check the response body contain id user information
      expect(response.body).to.have.property('createdAt'); // Check the response body contain created time information
    });
  });


  
  it('Update register Users', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: 'morpheus',     
        job: 'zion resident'
      }
    }).should((response) => {
      expect(response.status).to.equal(200); // Check the response status code
      expect(response.body).to.have.property('name'); // Check the response body contain name information
      expect(response.body).to.have.property('job'); // Check the response body contain job information
      expect(response.body).to.have.property('updatedAt'); // Check the response body contain updated time information
    });
  });

  it('Negative Case - Unsuccess register Users', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      failOnStatusCode: false,
      body: {
        email: 'eve.holt@reqres.intes',     //Wrong user email
        password: 'pistol'
      }
    }).should((response) => {
      expect(response.status).to.equal(400); // Check the response status code
      expect(response.body).to.have.property('error'); // Check the response body contain error information
    });
  });

});
