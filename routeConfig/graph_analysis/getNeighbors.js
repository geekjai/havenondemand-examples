'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/graph_analysis/getneighbors');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'The Get Neighbors API returns the neighbors of one or more specified nodes. By default, the API sorts neighbors by their similarity to the specified node.',
    tags: ['api'],
    validate: {
        payload: {
            graph: Joi.string()
                    .required()
                    .description('The graph you want to query. Default value: wiki_eng.')
                    .example('wiki_eng'),
            max_results : Joi.number()
                    .optional()
                    .description('The maximum number of results to return. Default value: 6. ')
                    .example(6),
            sort: Joi.string()
                    .required()
                    .description('The sorting method to use for the results. Default value: default.')
                    .example('default'),
            min_commonality: Joi.number()
                   .optional()
                   .description('The minimum commonality that the results must have. Default value: 2.')
                   .example(2),
            source_ids : Joi.string()
                   .optional()
                   .description('The IDs of the source nodes that you want to find neighbors for.')
                   .example('1092'),
            source_names : Joi.string()
                    .optional()
                    .description('The IDs of the source nodes that you want to find neighbors for.')
                    .example('India'),
            target_ids : Joi.string()
                    .optional()
                    .description('The IDs of the source nodes that you want to find neighbors for. ')
                    .example('India'),
            target_names : Joi.string()
                    .optional()
                    .description('The names of the source nodes that you want to find neighbors for. You must percent-encode the node names.')
                    .example('Democracy')
        }
    }
};
