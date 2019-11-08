var News = require('./newsModel'),
express = require('express'),
newsRoutes = express.Router();

newsRoutes.get('/top', function(req, res){
    //console.log(req.body);
    News.topheadlines()
    .then(response =>{
        res.status(200).send(response);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).send(err);
    });
});

module.exports = newsRoutes;