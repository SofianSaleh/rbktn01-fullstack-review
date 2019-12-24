const request = require('request');
const config = require('../config.js');
const axios = require('axios')
const fetch = require('fetch')

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request.get(options, (err, data, body) => {
    //console.log("data",data.connection._tlsOptions.session );
    if(err) {
      callback(err, null)
    }else{
      console.log(data)
      callback(null, data)
    }
  })


}

module.exports.getReposByUsername = getReposByUsername;