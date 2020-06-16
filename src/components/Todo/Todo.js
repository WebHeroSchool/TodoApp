import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './Todo.module.css'
import classnames from 'classnames';

const Todo = () => {

const initialState = {

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

  ],
     
    }

const [items, setItems] = useState(initialState.items);

useEffect(() => {

        console.log('useEffect');
    })

const onClickDone = id => {

const newItemList = items.map(item => {
    const newItem = {...item};
    if (item.id === id) {
      newItem.isDone = !item.isDone
    }

    return newItem;
  });

  setItems(newItemList);
};

const onClickDelete = id => {
        const newItemList = items.filter(item => item.id !== id);
        setItems(newItemList);
};

const onClickAdd = item => {

  const newItemList = [
    ...items,
    {
      id: item.length !== 0,
      value: item,
      isDone: false
  }
  ];

  setItems(newItemList);
  
};


  
const activeTasks = items.filter(item => !item.isDone)

  return (<div className={styles.content}>
      <h1 className={styles.title}> To do list </h1>
      <InputItem onClickAdd = {onClickAdd}/>
      <ItemList items={items}
        onClickDone = {onClickDone} 
        onClickDelete = {onClickDelete} />
      <Footer count = {activeTasks.length} />
    </div>
   )
 
  
}
  
    

export default Todo