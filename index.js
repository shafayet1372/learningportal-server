const jsonServer = require("json-server"); // importing json-server library
const auth=require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = auth.defaults();
const port = 9000; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port);
