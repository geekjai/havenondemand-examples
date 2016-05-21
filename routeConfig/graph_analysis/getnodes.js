'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/graph_analysis/getnodes');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'The Get Nodes API lists the nodes in the graph. By default, the API sorts nodes by their in-degree (that is, the number of edges that point to the specified node). This allows you to find the most important nodes in the graph. You can use the ids and name attributes of nodes as inputs to other graph actions.',
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
                    .optional()
                    .description('The sorting method to use for the results. Default value: default.')
                    .example('default')
        }
    }
};
