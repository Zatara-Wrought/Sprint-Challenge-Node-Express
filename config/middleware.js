const express = require("express");
const morgan = require("morgan");

module.exports = server => {
  server.use(express.json());
  server.use(morgan("dev"));
};
