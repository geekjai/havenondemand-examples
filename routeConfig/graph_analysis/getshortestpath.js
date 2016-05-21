'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/graph_analysis/getshortestpath');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'The Get Shortest Path API finds the shortest path in the graph between two specified nodes.',
    tags: ['api'],
    validate: {
        payload: {
            source_id: Joi.string()
                    .optional()
                    .description('The ID of the source node. ')
                    .example('65789'),
            target_id : Joi.number()
                    .optional()
                    .description('The ID of the target node. ')
                    .example('78543'),
            source_name: Joi.string()
                    .optional()
                    .description('The name of the source node. You must percent-encode the node name.')
                    .example('India'),
            target_name: Joi.string()
                    .optional()
                    .description('The name of the target node. You must percent-encode the node name.')
                    .example('America'),
            graph : Joi.string()
                    .optional()
                    .description('The graph you want to query. Default value: wiki_eng.')
                    .example('wiki_eng'),
            measure: Joi.string()
                    .optional()
                    .description('The method to use to determine the distance between nodes. Default value: uniform.')
                    .example('uniform')
        }
    }
};
