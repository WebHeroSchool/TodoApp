import React from 'react'
import Item from '../Item/Item'
import styles from './ItemList.module.css'

	const ItemList = ({items}) => (<ul>{items.map(item => <li className ={styles.list} key = {item.value}>
		<Item value = {item.value} isDone ={item.isDone} />
		</li>)}
  		</ul>)


export default ItemList