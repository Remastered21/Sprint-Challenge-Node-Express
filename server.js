const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const projectRoutes = require("./router/projectRoutes");
const actionRoutes = require("./router/ActionRoutes");

const server = express();

function logger(req, res, next) {
  return function(req, res, next) {
    console.log(`\n== Requesting: ${req.url}`);
    next();
  };
}

server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)

server.get('/', (req, res) => {
  res.send('server is actually running.')
})

server.listen(5000, () => console.log(`\n== API is running on port 5000 ==\n`))