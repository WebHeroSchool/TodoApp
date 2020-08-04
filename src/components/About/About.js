import React, {Component} from 'react'
import styles from './About.module.css'
import LinearProgress from '@material-ui/core/LinearProgress';
import {Octokit} from '@octokit/rest'
import Card from '@material-ui/core/Card';
import classnames from 'classnames';
import Contacts from '../Contacts/Contacts'
// import Repositories from '../Repositories/Repositories'

const octokit = new Octokit();

class About extends React.Component {
  state = {
    isLoading: true,
    repoList: [],
    error: null

  }
  
  componentDidMount() {
   fetch(`https://api.github.com/users/MariaKasa`)
   .then(res => res.json())
   .then(
    (result) => {
      this.setState({
        name: result.name,
        avatar: result.avatar_url,
        bio: result.bio
      })
     
    })
    octokit.repos.listForUser({
  username: 'MariaKasa',
 })

    .then(({data}) => {
      this.setState({
    repoList: data,
    isLoading: false,
    language: data.language,
    // update: data.updated_at

    }
    )
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



const {error,isLoading, repoList, bio, avatar, name, language} = this.state;
 

    
  if(error) {
    return (<p> Not Found :( </p>)
      } 
  else  { 
    return(
      <div className = {styles.content}>
      <Card className = {styles.about}>
        <img className = {styles.avatar} src = {avatar} />
        <div className = {styles.description}>
        <h2> {name}</h2>
        <h3>{bio}</h3>
        </div>
        <Contacts />
        </Card>
        <Card className = {styles.repo}>
        <div className = {styles.repolist}>
        <h2> My repositories</h2>
        {!isLoading && 
        <ul>
        {repoList.map(repo => (
          <li className={styles.list} key = {repo.id}>
        <a href={repo.html_url} target="_blank" className = {styles.name}>{repo.name}</a> <br />
        <div className = {styles.langstring}> <span className = {classnames({
                [styles.html_circle]: repo.language === 'HTML',
                [styles.css_circle]: repo.language === 'CSS',
                [styles.js_circle]: repo.language === 'JavaScript'
    })}> {repo.language}</span> 
    <span className = {styles.date}>updated on {new Date(repo.updated_at).toLocaleDateString()}
       </span></div>
    </li>))
   }
        
        </ul>
       } </div>
       </Card>
      </div>)
    }
  }
}

export default About