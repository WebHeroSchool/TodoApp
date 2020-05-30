
import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './App.module.css'
import classnames from 'classnames';


	class App extends React.Component {
		
		state = {

			 items: [

			{ value: 'Сделать задание по React',
			isDone: false,
			id: 1
		},

	 		{ value: 'Учить слова по английскому',
	 		isDone: false,
	 		id: 2
	},

	 	{ value: 'Прочитать статью',
	 	isDone: false,
	 	id: 3
	},

	 	{ value: 'Сделать зарядку',
	 	isDone: false,
	 	id: 4
	},

	 	{ value: 'Испечь пирог',
	 	isDone: false,
	 	id: 5
	}

	],
	 count: 5

		}

onClickDone = id => {

const newItemList = this.state.items.map(item => {
	const newItem = {...item};
	if (item.id === id) {
		newItem.isDone = !item.isDone;
	}
	return newItem;

}) 

this.setState({ items: newItemList})
this.setState({count:this.state.count -1})
}
		render() {
			

	return (<div className={styles.content}>
  		<h1 className={styles.title}> To do list </h1>  <InputItem />
  		<ItemList items={this.state.items} onClickDone = {this.onClickDone} />
   		<Footer count = {this.state.count}/>
  		</div>
  	  )
 
	}
	}
	
		

  export default App