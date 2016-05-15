module.exports = [
  {
    method: 'POST',
    path: '/analyzesentiment',
    config: require('./routeConfig/postAnalyzesentiment')
  },
  {
    method: 'POST',
    path: '/autocomplete',
    config: require('./routeConfig/postAutocomplete')
  }
]
