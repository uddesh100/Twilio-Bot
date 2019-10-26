var express = require('express'),
    messagingRoutes = express.Router(),
    Message = require('./messagesModel')
const MessagingResponse = require('twilio').twiml.MessagingResponse;

messagingRoutes.post('/sms', function(req, res){
    console.log(req.body);
    const twiml = new MessagingResponse();

    twiml.message('The Robots are coming! Head for the hills!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
    // .then(resut =>{
    //     res.status(200).send(response);
    // })
    // .catch(err =>{
    //     console.log(err);
    //     res.status(500).send(err);
    // });
});

messagingRoutes.get('/hello', function(req, res){
    res.status(200).send("All Good.");
})

module.exports = messagingRoutes;