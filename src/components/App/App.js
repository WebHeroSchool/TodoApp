
import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './App.css'

const todoItem = 'Сделать задание по React'

const App = () => {
	const items = [
	{ value: 'Сделать задание по React'
},
	 { value: 'Учить слова по английскому'
	},
	 { value: 'Прочитать статью'
	},
	 { value: 'Сделать зарядку'
	},
	 { value: 'Испечь пирог'
	}
	];
	return (<div className="content">
  <h1 className="title"> To do list </h1>  <InputItem />
  <ItemList items={items} />
   <Footer count = {4}/>
  </div>)
 
}

  export default App