
import React from 'react';
import InputItem from '../InputItem/InputItem'
import ItemList from '../ItemList/ItemList'
import Footer from '../Footer/Footer'

const todoItem = 'Сделать задание по React'

const App = () => (
  <div>
  <h1> To do list </h1>  <InputItem />
  <ItemList todoItem={todoItem} />
   <Footer count = {4}/>
  </div>)


  export default App

