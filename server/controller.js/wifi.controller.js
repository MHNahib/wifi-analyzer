const wifi = require("../utils/wifi");
const CustomErrorHandler = require("../services/CustomErrorHandler");

const wifiController = {
  async getData(req, res, next) {
    wifi.scan((error, networks) => {
      if (error) {
        return next(CustomErrorHandler.serverError());
      } else {
        const data = {
          status: "200",
          message: "success",
          networks: networks,
        };
        return res.status(200).json(data);
      }
    });
  },
};

module.exports = wifiController;
