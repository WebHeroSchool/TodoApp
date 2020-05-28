
import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './App.module.css'
import classnames from 'classnames';

	const todoItem = 'Сделать задание по React'

	const App = () => {
		const items = [

			{ value: 'Сделать задание по React',
			isDone: true
		},

	 		{ value: 'Учить слова по английскому',
	 		isDone: true
	},

	 	{ value: 'Прочитать статью',
	 	isDone: true
	},

	 	{ value: 'Сделать зарядку',
	 	isDone: false
	},

	 	{ value: 'Испечь пирог',
	 	isDone: false
	}
	];

	return (<div className={styles.content}>
  		<h1 className={styles.title}> To do list </h1>  <InputItem />
  		<ItemList items={items} />
   		<Footer count = {4}/>
  		</div>
  	  )
 
	}

  export default App