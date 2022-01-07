const { getRoutes } = require('get-routes');
const express = require("express");
const cors = require("cors");

const app = express();
const routes = getRoutes(app);

console.log(routes);