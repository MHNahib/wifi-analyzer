class CustomErrorHandler extends Error {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }

  static serverError(status = "500", message = "Internal server Error") {
    return new CustomErrorHandler(status, message);
  }
}

module.exports = CustomErrorHandler;
