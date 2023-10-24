describe('API Test Example', () => {

  it('List Users', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?page=1',
    }).then((response) => {
      expect(response.status).to.equal(200); // Check the response status code
      expect(response.body).to.have.property('page', 1); // Check a specific property in the response
      expect(response.body).to.have.property('per_page', 6); // Check a specific property in the response
      expect(response.body).to.have.property('total'); // Check the response body
      expect(response.body).to.have.property('total_pages'); // Check the response body
    });
  });

  it('Create Users', () => {
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
      expect(response.body).to.have.property('id'); // Check the response body
      expect(response.body).to.have.property('createdAt'); // Check the response body
    });
  });

  it('Register Users', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      body: {
        email:'eve.holt@reqres.in',
        password:'pistol'
      }
    }).then((response) => {
      expect(response.status).to.equal(200); // Check the response status code
      expect(response.body).to.have.property('id'); // Check the response body
      expect(response.body).to.have.property('token'); // Check the response body
    });
  });

});
