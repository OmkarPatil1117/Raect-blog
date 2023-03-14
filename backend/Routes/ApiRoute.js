const express = require("express")
const ApiData = require("../api/ApiData")

const data = express.Router();
data.route("/").get(ApiData.apiController)

module.exports = data;