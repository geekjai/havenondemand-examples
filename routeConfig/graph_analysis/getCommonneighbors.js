'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/graph_analysis/getcommonneighbors');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'The Get Common Neighbors API finds the common neighbors of the nodes that you specify.',
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
            min_commonality: Joi.number()
                   .optional()
                   .description('The minimum commonality that the results must have. Default value: 2.')
                   .example(2),
            source_ids : Joi.string()
                   .optional()
                   .description('The IDs of the source nodes that you want to find neighbors for.')
                   .example('1092'),
            // source_names : Joi.string()
            //         .optional()
            //         .description('The IDs of the source nodes that you want to find neighbors for.')
            //         .example('India,America,London'),
            source_names : Joi.array().items(Joi.string()),
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
