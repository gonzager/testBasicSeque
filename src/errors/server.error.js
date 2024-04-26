class RequestError extends Error {
  constructor(error) {
    super(error.message);
    this.statusCode = error.statusCode;
    this.atributo = error.atributo;
  }
}

module.exports = RequestError;