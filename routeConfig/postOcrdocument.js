'use strict';

const Joi = require('joi');
const serviceHandler = require('../handlers/ocrdocument');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'Adding a new product item',
    notes: 'The OCR Document API extracts text from an image that you provide.',
    tags: ['api'],
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    },
    validate: {
        payload: {
          file : Joi.object().meta({ swaggerType: 'file' }).optional()
        }
    },
    plugins: {
      'hapi-swagger': {
          payloadType: 'form'
      },
    }
};
