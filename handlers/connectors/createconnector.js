var havenondemand = require('havenondemand')
const config = require('../../config/config.js');
const Promise = require('bluebird');

var client = new havenondemand.HODClient(config('HAVEN_ON_DEMAND_API_KEY'));

var createconnector = function(data){
  return new Promise(function(resolve, reject){
    client.call('createconnector', data, function(err,resp,body){
      if(err){
        reject(err);
        return;
      }
      resolve(body);
    })
  });
}

var handler = function(request, reply){
  var file = {
    file : (request.payload['file'].hapi).filename
  }
  createconnector(file).then(reply).catch(reply);
}

module.exports.handler = handler;
/***
flavor : (required)
~ web_cloud
~ filesystem_onsite
~ sharepoint_onsite
~ dropbox_cloud
connector
config
destination
==================

***/
