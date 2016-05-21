'use strict';

const Joi = require('joi');
const serviceHandler = require('../../handlers/graph_analysis/summarizegraph');

module.exports = {
    handler: function(request, reply){
      serviceHandler.handler(request, reply);
    },
    description: 'HPE API Service',
    notes: 'The Summarize Graph API returns a summary of the number of nodes and edges in the graph, and details of the stored edge and node attributes.',
    tags: ['api'],
    validate: {
        payload: {
            graph : Joi.string()
                    .optional()
                    .description('The graph you want to query. Default value: wiki_eng.')
                    .example('wiki_eng')
        }
    }
};
