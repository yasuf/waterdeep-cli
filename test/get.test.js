const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const http = require('http');

describe("get", function() {
  const get = require('../src/get');
  const fakeResponse = {
    headers: {
      'content-type': 'application/json'
    },
    statusCode: 200,
    on: () => {}
  }
  let data

  before(function() {
    sinon.stub(http, 'get').callsFake((url, callback) => {
      callback(fakeResponse);
    })
  });

  /*
    1. Callback gets called with a string as first argument
    2. http.get  gets called with url and a function
    3. if statusCode is not 200, exits without calling callback
    4. if contentType is not application/json, exits without calling callback
    5. 
  */

  it("is a function", function(){
    expect(get).to.be.a("function");
  });
});
