const CustomErrorHandler = require("../services/CustomErrorHandler");

const errorHandler = (err, req, res, next) => {
  let statusCode = 500;

  if (err instanceof CustomErrorHandler) {
    statusCode = err.status;
    data = {
      status: statusCode,
      message: err.message,
    };
  }

  return res.status(statusCode).json(data);
};

module.exports = errorHandler;
