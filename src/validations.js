/*
 * Check if the status code is succesful
 */
function checkStatusCode(response) {
  const { statusCode } = response;
  if (statusCode !== 200) {
    throw new Error(`Request failed\n Status Code: ${statusCode}`);
  }
}

/*
 * Check the content type
 */
function checkContentType(response) {
  const contentType = response.headers['content-type'];

  if (!/^application\/json/.test(contentType)) {
    throw new Error(`Invalid content-type\n Expected application/json but received ${contentType}`);
  }
}

module.exports = {
  checkStatusCode,
  checkContentType
}
