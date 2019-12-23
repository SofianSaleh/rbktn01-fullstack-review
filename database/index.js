const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  login: String,
  avatar_url: String,
  html_url: String,
  reposs_url: String,
  gists_url: String,

  id: Number,
  name: { type: String, unique: true },
  full_name: String,
  html_url: String,
  description: String,
  url: String,
  created_at: String,
  updated_at: String,
  stargazers_count: Number,
  watchers_count: Number,
  languages_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  let repos = JSON.parse(repo.body)
  repos.forEach((elements) => {
    Repo.create(elem, err => {
      if(err) {
        console.log(err)
      }else{
        console.log('SAVED!!')
      }
    })
  })
}

let findRepos = (callback) => {
  Repo.find().sort('id').limit(25).exec((err, repos) => {
    if(err) {
      callback(err, null)
    }else {
      callback(null, data)
    }
  })
}

module.exports.save = save;
module.exports.findRepos = findRepos