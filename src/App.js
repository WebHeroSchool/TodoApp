import React from 'react';

const ItemList = () => (<ul><li>Джаз</li>
  <li>Блюз </li>
  <li>Классика</li>
  <li>Рок</li>
  <li>Рэп</li>
  <li>Инди</li>
  <li>Регги</li>
  <li>Поп</li>
  </ul>)
const App = () => (<div><h1 style = {{color: '#000080'}}> Жанры музыки </h1>
  <ItemList />
  </div>)


  export default App
