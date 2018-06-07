const http = require('http');
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
    const { statusCode } = response;
    const contentType = response.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error(`Request failed\n Status Code: ${statusCode}`);
    }
    if (/^application\/json/.test(contentType)) {
      error = new Error(`Invalid content-type\n Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      process.exit(1);
    }

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
