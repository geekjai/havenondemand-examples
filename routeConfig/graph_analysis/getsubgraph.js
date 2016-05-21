'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/graph_analysis/getsubgraph');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'The Get Subgraph API returns a subgraph based on a set of nodes that you provide, including all the edges that occur between these nodes in the main graph.',
    tags: ['api'],
    validate: {
        payload: {
            node_ids: Joi.array().items(Joi.number()).optional()
                    .description('The IDs of the nodes to return the subgraph for.'),
            node_names : Joi.array().items(Joi.string())
                    .optional()
                    .description('The names of nodes to return the subgraph for. You must percent-encode the node names.'),
            graph : Joi.string()
                    .optional()
                    .description('The graph you want to query. Default value: wiki_eng.')
                    .example('wiki_eng')
        }
    }
};
