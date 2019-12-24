const express = require('express');
const bodyParser = require('body-parser')
let app = express();
const github = require('../helpers/github.js')
const { save, findRepos } = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  var username = req.body.username;
  github.getReposByUsername(username, (err, data) => {
    if(err){
      console.log('err post in server')
    }else {
      // console.log(data)
      save(data)

    }
  })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  findRepos((err, repo) => {
    if(err) {
      console.log('err index server')
    }else{
      res.send(repo)
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

