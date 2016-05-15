'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const config = require('./config/config.js');
//const database = require('./database/database.js');

const server = new Hapi.Server();
const Path = require('path');
server.connection({
  host: '127.0.0.1',
  port: 3000,
  routes: {
    //cors: true //enabling cross origin and cookie creation in cross origin case.
    "cors": {
      "credentials": true,
      "origin": ["*"]
    }
  }
});

const options = {
  info: {
    'title': 'HPE on Demand',
    'version': Pack.version,
  }
};

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {

      server.route(require('./routes.js'));

      server.start( (err) => {
         if (err) {
              console.log(err);
          } else {
              console.log('Server running at:', server.info.uri);
          }
      });
});
