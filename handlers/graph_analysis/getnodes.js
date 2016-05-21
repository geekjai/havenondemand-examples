var havenondemand = require('havenondemand')
const config = require('../../config/config.js');
const Promise = require('bluebird');

var client = new havenondemand.HODClient(config('HAVEN_ON_DEMAND_API_KEY'));

var getnodes = function(data){
  return new Promise(function(resolve, reject){
    client.call('getnodes', data, function(err,resp,body){
      if(err){
        return reject(err);
      }
      resolve(body);
    })
  });
}

var handler = function(request, reply){
  getnodes(request.payload).then(reply).catch(reply);
}

module.exports.handler = handler;
