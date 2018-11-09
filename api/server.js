const express = require("express");
const server = express();

const projectRouter = require("../routers/projectRouter");
const actionRouter = require("../routers/actionRouter");

const configMiddleware = require("../config/middleware");
configMiddleware(server);

server.get("/", (req, res) => {
  res.send({ API: "live" });
});

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);

module.exports = server;
