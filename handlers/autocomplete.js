var havenondemand = require('havenondemand')
const config = require('../config/config.js');
const Promise = require('bluebird');

var client = new havenondemand.HODClient(config('HAVEN_ON_DEMAND_API_KEY'));

var autocomplete = function(data){
  return new Promise(function(resolve, reject){
    client.call('autocomplete', data, function(err,resp,body){
      if(err){
        reject(err);
        return;
      }
      resolve(body);
    })
  });
}

var handler = function(request, reply){
  autocomplete(request.payload).then(reply).catch(reply);
}

module.exports.handler = handler;
