import React from 'react'
import Item from '../Item/Item'

const ItemList = ({todoItem}) => (<ul>
  <li> <Item todoItem = {todoItem} /></li>
  <li> <Item todoItem = {'Учить слова по английскому'}/></li>
  <li> <Item todoItem = {'Прочитать статью'} /></li>
  <li> <Item todoItem = {'Сделать зарядку'} /></li>
  <li> <Item todoItem = {'Испечь пирог'} /></li>
  </ul>)

export default ItemList