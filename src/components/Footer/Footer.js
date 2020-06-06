import React from 'react'
import styles from './Footer.module.css'

	const Footer = ({ count, item, isDone }) => (<div className = {styles.footer}>Осталось: {count}</div>);
		
export default Footer