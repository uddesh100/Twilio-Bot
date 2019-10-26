const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

exports.respond = function(req, res){
        const twiml = new MessagingResponse();

        twiml.message('The Robots are coming! Head for the hills!');

        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(twiml.toString());
}