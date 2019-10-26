var express = require('express'),
    appRoutes = express();

var apiRoutes = require('../api/apiRoutes');

appRoutes.use('/api', apiRoutes);

module.exports = appRoutes;