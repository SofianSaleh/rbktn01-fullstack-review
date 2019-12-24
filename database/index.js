const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  name: String,
  full_name: String,
  owner:{
    login:String,
    repos_url:String
  },
  created_at: String,
  updated_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
 //var repos = JSON.parse(repo);
  // repos.forEach(elem => {
    // var repo = new Repo(repos)
    Repo.create(repos).then(res => {
      // console.log(res);
      // console.log(res)
      console.log("saved! database");

    }).catch(err => {

      console.log('err database');
    })

  // });
  // the MongoDB
};

let findRepos = (callback) => {
  Repo.find().sort('created_at-').limit(25).exec((err, repos) => {
    if(err) {
      callback(err, null)
    }else {
      // console.log(repos)
      callback(null, repos)
    }
  })
}

module.exports = {
  save,
  findRepos
};
