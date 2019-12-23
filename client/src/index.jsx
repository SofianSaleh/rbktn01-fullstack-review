import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url:"/repos",
      method: "POST",
      dataType: "application/json",
      data: { username: term },
      success: data => {
        console.log("It fucking worked")
      },
      error : () => {
        console.log('ahh shit here we go again')
      }
    });
  }

  componentDidMount() {
    $.ajax({
      url: "/repos",
      method: "GET",
      success: repos => {
        this.setState({ repos })
      }
    });
  }

  render () {
    return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));