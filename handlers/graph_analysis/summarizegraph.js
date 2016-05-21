/***
You can get an idea of how much information the graph contains by counting the
nodes and edges. For example, the graph above has seven nodes and nine edges.
The Summarize Graph API returns this information for a graph.

The Summarize Graph API also returns information about any node and
edge attributes (that is, information associated with the nodes and edges).
In the Wikipedia graph dataset, each node has an in-degree attribute,
which shows the number of edges that point to the node. Each edge also has
a weight attribute, which represents the conceptual distance between the pair
of pages that it links. A low weight indicates that the pages are very similar
(an edge between identical pages has zero weight). The Graph APIs automatically
calculate the weight for the edges according to an internal weighting algorithm.
*/
var havenondemand = require('havenondemand')
const config = require('../../config/config.js');
const Promise = require('bluebird');

var client = new havenondemand.HODClient(config('HAVEN_ON_DEMAND_API_KEY'));

var summarizegraph = function(data){
  return new Promise(function(resolve, reject){
    client.call('summarizegraph', data, function(err,resp,body){
      if(err){
        return reject(err);
      }
      resolve(body);
    })
  });
}

var handler = function(request, reply){
  summarizegraph(request.payload).then(reply).catch(reply);
}

module.exports.handler = handler;
