var havenondemand = require('havenondemand')
const config = require('../config/config.js');
const Promise = require('bluebird');

var client = new havenondemand.HODClient(config('HAVEN_ON_DEMAND_API_KEY'));

var viewdocument = function(data){
  return new Promise(function(resolve, reject){
    client.call('viewdocument', data, function(err,resp,body){
      if(err){
        reject(err);
        return;
      }
      console.log(body);
      resolve(body);
    })
  });
}

var handler = function(request, reply){
  var file = {
    file : (request.payload['file'].hapi).filename
  }
  viewdocument(file).then(reply).catch(reply);
}

module.exports.handler = handler;
