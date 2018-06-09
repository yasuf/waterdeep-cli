const http = require('http');
const validations = require('./validations');

/*
 * @callback requestCallback
 * @param {string} rawData raw data from GET response
 */

/*
 * @param {string} url url to retrieve data from
 * @param {requestCallback} callback callback to call when getting data, first parameter
 */
module.exports = function get(url, callback) {
  http.get(url, (response) => {

    validations.checkStatusCode(response);
    validations.checkContentType(response);

    let rawData = '';

    response.on('data', (chunk) => {
      rawData += chunk;
    });

    response.on('end', () => {
      try {
        callback(rawData);
      } catch(e) {
        console.error(e.message);
        throw new Error(e.message);
      }
    });
  });
}
