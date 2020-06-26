import React, {Component} from 'react'
import styles from './About.module.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import {Octokit} from '@octokit/rest'

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    error: null

  }
  
  componentDidMount() {
    octokit.repos.listForUser({
  username: 'MariaKasa',
 })
    .then(({data}) => {
      this.setState({
    repoList: data,
    isLoading: false
    })
    },
    (error) => {
      this.setState({
      isLoaded: true,
      error
    });
    }
    ) 
  }
  
render () {

const {error,isLoading, repoList} = this.state;

  if(error) {
    return (<p> Not Found :( </p>)
      } 
  else  { 
    return(
      <div className = {styles.content}>
        <h1>{isLoading ? <LinearProgress /> : 'About me'}</h1>
        {!isLoading && 
        <ul>
        {repoList.map(repo => (
          <li className={styles.list} key = {repo.id}>
        <a href={repo.html_url} target="_blank">{repo.name}</a>
          </li>))}
        </ul>
       }
      </div>)
    }
  }
}

export default About