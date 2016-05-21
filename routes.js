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
  },
  {
    method: 'POST',
    path: '/formatconversion/extracttext',
    config: require('./routeConfig/postExtracttext')
  },
  {
    method: 'POST',
    path: '/formatconversion/viewdocument',
    config: require('./routeConfig/postViewdocument')
  },
  //connectors
  {
    method: 'POST',
    path: '/connectors/createconnector',
    config: require('./routeConfig/connectors/postCreateconnector')
  },
  //graph analysis
  {
    method: 'POST',
    path: '/graphanalysis/getNeighbors',
    config: require('./routeConfig/graph_analysis/getNeighbors')
  },
  {
    method: 'POST',
    path: '/graphanalysis/getCommonNeighbors',
    config: require('./routeConfig/graph_analysis/getCommonneighbors')
  },
  {
    method: 'POST',
    path: '/graphanalysis/getNodes',
    config: require('./routeConfig/graph_analysis/getnodes')
  },
  {
    method: 'POST',
    path: '/graphanalysis/getShortestPath',
    config: require('./routeConfig/graph_analysis/getshortestpath')
  },
  {
    method: 'POST',
    path: '/graphanalysis/getSubGraph',
    config: require('./routeConfig/graph_analysis/getsubgraph')
  }
]
