var express = require('express'),
    messagingRoutes = express.Router(),
    Message = require('./messagesModel'),
    News = require('../news/newsModel')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

//NEWS API
//e130320d98d94190b1b9949ac3bf8ac0

messagingRoutes.post('/sms', function(req, res){
    //console.log(req.body);
    News.topheadlines(req.body.Body)
    .then(articles => {
        //console.log(articles);
        const twiml = new MessagingResponse();

        twiml.message(articles);

        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
    })
    .catch(err =>{
        console.log(err);
    })
});

messagingRoutes.get('/hello', function(req, res){
    res.status(200).send("All Good.");
})

module.exports = messagingRoutes;