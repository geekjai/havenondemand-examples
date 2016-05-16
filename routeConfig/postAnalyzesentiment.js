'use strict';

const Joi = require('joi');
const serviceHandler = require('../handlers/analyzesentiment');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'Adding a new product item',
    notes: 'This api will be used by admin or product manager to add new product.',
    tags: ['api'],
    validate: {
        payload: {
            text: Joi.string()
                    .required()
                    .description('provide test to get id in return').example('I like cats')
        }
    }
};
