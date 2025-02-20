#!/usr/bin/env node
function startPJS() {
  const profoundjs = require("profoundjs");
  profoundjs.applyConfig();
  profoundjs.server.listen();
  var express = profoundjs.server.express;
  var app = profoundjs.server.app;
  app.use(express.json());
}
 startPJS();
