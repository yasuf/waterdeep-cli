const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe("validations", function() {
  const fakeResponse = {
    headers: {
      'content-type': 'application/json'
    },
    statusCode: 200,
    on: () => {}
  }

  it("is a function", function(){
    expect(get).to.be.a("function");
  });
});
