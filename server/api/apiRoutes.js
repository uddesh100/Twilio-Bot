var express = require('express'),
    apiRoutes = express(),
    bodyParser = require('body-parser');

apiRoutes.use(bodyParser.json());
apiRoutes.use(bodyParser.urlencoded({extended: true}));

var messagingRoutes = require('./messages/messagesController');
apiRoutes.use('/message', messagingRoutes);

var newsRoutes = require('./news/newsController');
apiRoutes.use('/news', newsRoutes);

// HOME ROUTING
// =============================================================================
apiRoutes.get('*', function(req, res) {
  res.send('<h1>Welcome to apiRoutes!</h1>');
});

module.exports = apiRoutes;