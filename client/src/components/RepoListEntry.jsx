import React from 'react';

const RepoListEntry = (props) => {
 return(
 <div>
    <div>
      <span>{props.repo.owner.login}</span>
      <span><a href={props.repo.html_url} target = "blank"/>{props.repo.html_url}</span>
      <h4>{props.repo.name}</h4>
    </div>
  </div>
 )
      }

export default RepoListEntry;