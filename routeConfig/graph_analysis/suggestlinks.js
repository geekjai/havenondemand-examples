'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/graph_analysis/suggestlinks');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'The Suggest Links API suggests nodes that a specified node is close to in the graph, but that it does not currently connect to.',
    tags: ['api'],
    validate: {
        payload: {
            node_ids: Joi.array().items(Joi.number()).optional()
                    .description('The IDs of the nodes to return the subgraph for.'),
            node_names : Joi.array().items(Joi.string())
                    .optional()
                    .description('The names of nodes to return the subgraph for. You must percent-encode the node names.'),
            max_results : Joi.number()
                    .optional()
                    .description('The maximum number of results to return. Default value: 6. ')
                    .example(6),
            graph : Joi.string()
                    .optional()
                    .description('The graph you want to query. Default value: wiki_eng.')
                    .example('wiki_eng')
        }
    }
};
