import React from 'react'
import Item from '../Item/Item'
import styles from './ItemList.module.css'
import PropTypes from 'prop-types'

const ItemList = ({items, onClickDone, onClickDelete, onClickAdd,filter, date}) => (
  <ul>{items.map(item =>
   <li className ={styles.list} key = {item.value}>
	 <Item
	  value = {item.value} 
	  isDone ={item.isDone} 
	  id = {item.id} 
	  onClickDone = {onClickDone}
	  onClickDelete = {onClickDelete}
	  onClickAdd = {onClickAdd}
    filter = {item.filter}
    date = {item.date}
	 />
		</li>)}
  </ul>
  		
)
ItemList.propTypes = {

    items: PropTypes.array.isRequired
};

export default ItemList



