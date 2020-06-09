
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



}

 onClickDelete = id => {

	const index = this.state.items.map( item => item.id).indexOf(id)
	this.setState( state => {
	let {items} = state;
	items.splice(index, 1);
	return items})
}

onClickAdd = item => {

	this.setState(state => {
		let {items} = state;
		items.push({
			id: item.length !== 0,
			value: item,
			isDone: false
		})

		return items
	})
}

render() {

	const {items} = this.state;
	const activeTasks = items.filter(item => !item.isDone)

	return (<div className={styles.content}>
  		<h1 className={styles.title}> To do list </h1>
  		<InputItem onClickAdd = {this.onClickAdd}/>
  		<ItemList items={this.state.items}
  	    onClickDone = {this.onClickDone} 
  		  onClickDelete = {this.onClickDelete} />
   		<Footer count = {activeTasks.length} />
  	</div>
   )
 
	}
}
	
		

export default App