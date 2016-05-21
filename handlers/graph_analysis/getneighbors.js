var havenondemand = require('havenondemand')
const config = require('../../config/config.js');
const Promise = require('bluebird');

var client = new havenondemand.HODClient(config('HAVEN_ON_DEMAND_API_KEY'));

var getneighbors = function(data){
  return new Promise(function(resolve, reject){
    client.call('getneighbors', data, function(err,resp,body){
      if(err){
        reject(err);
        return;
      }
      resolve(body);
    })
  });
}

var handler = function(request, reply){
  getneighbors(request.payload).then(reply).catch(reply);
}

module.exports.handler = handler;
