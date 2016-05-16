'use strict';

const Joi = require('joi');
const serviceHandler = require('../handlers/extractconcepts');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'Adding a new product item',
    notes: 'The Concept Extraction API uses statistical methods to extract key concepts from text.',
    tags: ['api'],
    validate: {
        payload: {
            url : Joi.string()
                    .required()
                    .description('d').example('http://en.wikipedia.org/wiki/United_Kingdom')
        }
    }
};

/**
{
  "error": 4015,
  "reason": "Missing required parameter(s)",
  "detail": "expected exactly one of: ('file', 'reference', 'text', 'url'); got all of: ('text', 'url')"
}
**/
