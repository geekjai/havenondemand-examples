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
  },
  {
    method: 'POST',
    path: '/extractconcepts',
    config: require('./routeConfig/postExtractconcepts')
  },
  //format conversion
  {
    method: 'POST',
    path: '/formatconversion/ocrdocument',
    config: require('./routeConfig/postOcrdocument')
  }
]
