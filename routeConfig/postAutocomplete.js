'use strict';

const Joi = require('joi');
const serviceHandler = require('../handlers/autocomplete');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'Adding a new product item',
    notes: 'The API returns a list of words and phrases that this text expands to..',
    tags: ['api'],
    validate: {
        payload: {
            text: Joi.string()
                    .required()
                    .description('The text that you want to expand.').example('lo')
        }
    }
};
