'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/connectors/createconnector');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'Connectors allow you to retrieve information from external systems and update it through Haven OnDemand APIs.',
    tags: ['api'],
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    },
    validate: {
        payload: {
          flavor : Joi.string().description('The flavor of the connector to create.').required().example('web_cloud'),
          connector : Joi.string().description('The name of the connector to create. Maximum length of 100 characters.').required().example('first-connector'),
          config : Joi.string().description('A JSON object defining the connector configuration.').required().example('first-connector'),
          destination : Joi.string().description('A JSON object defining the destination to which the connector must send retrieved data.').required().example('first-connector')
        }
    },
    plugins: {
      'hapi-swagger': {
          payloadType: 'form'
      },
    }
};
