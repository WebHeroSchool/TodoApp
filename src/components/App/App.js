
import React from 'react';
import styles from './App.module.css'
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import Card from '@material-ui/core/Card';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App =() => 
(	<Router>
		<div>
			<Card className = {styles.menu}>
				<ul className = {styles.nav}>
					<Link to='/about' className = {styles.link}><li> About </li></Link>
					<Link to='/todo' className = {styles.link}><li> Tasks </li></Link>
					<Link to='/contacts' className = {styles.link}><li> Contacts</li></Link>
				</ul>
			</Card>
			<Card className = {styles.item}>
			</Card>
	<Route path='/about' exact component={About} />
			<Route path='/todo' component={Todo} />
			<Route path='/contacts' component={Contacts} />
		</div>
	</Router>);

export default App
