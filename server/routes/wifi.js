const express = require("express");
const wifiController = require("../controller.js/wifi.controller");
const router = express.Router();

router.get("/", wifiController.getData);

module.exports = router;
