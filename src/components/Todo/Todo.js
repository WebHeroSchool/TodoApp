import React, {useState, useEffect} from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'
import styles from './Todo.module.css'
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Item from '../Item/Item'

class Todo extends React.Component {
    
  state = {

   items: [

    { value: 'Сделать задание по React',
    isDone: false,
    id: 1,
    filter: 0,
   
    
    },

    { value: 'Учить слова по английскому',
    isDone: false,
    id: 2,
    filter: 0,
 
  },

   { value: 'Прочитать статью',
   isDone: false,
   id: 3,
   filter: 0,
   
  },

  

  ],
     

    }


setFilter = filter => item => {                             
    item.preventDefault();
    
    this.setState({ filter });   
  };
     



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



//  onClickDelete = id => {

//   const index = this.state.items.map( item => item.id).indexOf(id)
//   this.setState( state => {
//   let {items} = state;
//   items.splice(index, 1);
//   return items})
// }
 
 onClickDelete = id => {
  const index = this.state.items.map( item => item.id).indexOf(id);
  this.setState( state => {
    let {items} = state;
  delete items[index];
  return items })
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

 reset = e => {
    e.preventDefault();

    this.setState({ items: [] }, this.save);
  };

 
render() {

  const  filterItems = item => {                        
      if (item.filter === 1) {
        return item.isDone;
      };

      if (item.filter === 2) {
        return !item.isDone;
      };

      return item;
    };

  const {items, filter, isEdit, value} = this.state;

  const activeTasks = items.filter(item => !item.isDone)

  return (<div className={styles.content}>
      <h1 className={styles.title}> To do list </h1>
      <InputItem onClickAdd = {this.onClickAdd}/>
      <ul>
          
          { items.length === 0 && <li className="placeholder">Добавь свое</li> }
          
          { ( items.length > 0 
             && items.filter(filterItems).length === 0 )
             && <li className="placeholder">No items</li> }
          
          { items.map( (item, index) => {
            if ((filter === 1 && !item.isDone) 
                || (filter === 2 && item.isDone)) {
              return null;
            };

            return <Item
                     item={ item }
                     value = {item.value} 
    isDone ={item.isDone} 
    id = {item.id} 
    onClickDone = {this.onClickDone}
    onClickDelete = {this.onClickDelete}
    onClickAdd = {this.onClickAdd}
    changeEdit= {this.changeEdit}
    updateValue = {this.updateValue}
    filter = {item.filter} />;
          }) }
        </ul>
      <Footer count = {activeTasks.length} />
      <div className = {styles.filters}>                 
          <a
            href="#root"
            onClick={ this.setFilter(0) }
             >
            Все
          </a>
          <a
            href="#root"
            onClick={ this.setFilter(1) }
            >
            Завершенные <span>{ items.filter(item => item.isDone).length }</span>
          </a>
          <a
            href="#root"
            onClick={ this.setFilter(2) }
            >
            Активные <span>{ items.filter(item => !item.isDone).length }</span>
          </a>
        </div>
        <div className="footer-actions">
          <a
            href="#root"
            className={ items.length === 0 ? 'disabled' : '' }
            disabled={ items.length === 0 }
            onClick={ this.reset }>Удалить все</a>
        </div>
    </div>
   )
 
  }
}
    

export default Todo