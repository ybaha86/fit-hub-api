describe('API Test Example', () => {
  it('Makes an API request and checks the response', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    }).then((response) => {
      expect(response.status).to.equal(200); // Check the response status code
      expect(response.body).to.have.property('userId', 1); // Check a specific property in the response
      expect(response.body).to.have.property('id', 1);
      expect(response.body).to.have.property('title');
      expect(response.body).to.have.property('body');
    });
  });

  it('Makes another API request', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      body: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    }).then((response) => {
      expect(response.status).to.equal(201); // Check for a successful POST request status code
      expect(response.body).to.have.property('title', 'foo'); // Check the response body
      expect(response.body).to.have.property('body', 'bar');
    });
  });
});
