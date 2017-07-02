require('dotenv').config();
const express   = require('express');
const request   = require('request');
const rp        = require('request-promise');
const q         = require('q');

const app = express();
const search = 'Toothonius-1398'

const requestParams = {
  method: 'GET'
, url: ''
, json: true
, qs: {
    
    // EVENTUALLY CHANGE LOCALE (should default to US)
    locale: 'en_US'
  , apikey: process.env.DIABLO_KEY
  }
}


// get account info
app.get('/account', function(req, res) {
  const deferred  = q.defer();
  let battleTag   = req.query.tag;
  let reqParams   = requestParams;
  reqParams.url   = 'https://us.api.battle.net/d3/profile/' + battleTag + '/';
  
  rp(reqParams)
  .then(function(data) {
    console.log(data);
    deferred.resolve(data);
  })
  .catch(function(err) {
    console.log('error in get account info');
    deferred.reject(err);
  })
  
  return deferred.promise;
});

// get single char info
app.get('/character', function(req, res) {
  const deferred  = q.defer();
  let battleTag   = req.query.tag;
  let charName    = req.query.charId;
  let reqParams   = requestParams;
  reqParams.url   = 'https://us.api.battle.net/d3/profile/' + battleTag + '/hero/' + charId
  
  rp(reqParams)
  .then(function(data){
    console.log(data);
    deferred.resolve(data);
  })
  .catch(function(err){
    console.log('error in get single char',err);
    deferred.reject(err);
  });
});

const port = process.env.PORT || 9001;

app.listen(port, function() {
  console.log(`express app listening on port ${port}`);
});