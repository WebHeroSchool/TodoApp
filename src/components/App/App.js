
import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'

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
	return (<div>
  <h1> To do list </h1>  <InputItem />
  <ItemList items={items} />
   <Footer count = {4}/>
  </div>)
 
}

  export default App