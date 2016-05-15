const nconf = require('nconf');

nconf.env().file(`./config/${process.env.NODE_ENV}.json`);

module.exports = function(key){
  return nconf.get(key);
}
