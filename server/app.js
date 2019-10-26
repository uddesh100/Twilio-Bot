var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    //morgan = require('morgan'),
    port = 7000,
    cors = require('cors'),
    path = require('path'),
    db = require('./db')
    //upload = require('express-fileupload');

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200
}));

//app.use(express.static('../client/dist/'));

var appRoutes = require('./routes');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//app.use(morgan('dev'));

//app.use(upload())

app.use('/', appRoutes);

// HOME ROUTING
// =============================================================================

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
