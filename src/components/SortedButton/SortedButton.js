import React from 'react'
// import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types'
import styles from './SortedButton.module.css'
import Item from '../Item/Item'

const FILTERS_BTN = [
  {
    text: 'All',
    label: 'all',
  },
  {
    text: 'Active',
    label: 'active',
  },
  {
    text: 'Completed',
    label: 'completed'
  }
];
function changeFilter () {
  if(label == 'active') {
    items.filter(item => item.isDone)
  }
  return items
}
const SortedButton = ({ items, activeFilter, changeFilter,label, filters, }) => (
  <div>
    <div>
      {FILTERS_BTN.map(({ text, items }) => (
        <button
          onClick={() => {changeFilter(label)}}
          key={label}
        >{text}</button>
      ))}
    </div>
  </div>
);



SortedButton.defaultProps = {
  changeFilter: () => {},
  amount: 0,
  activeFilter: 'all',
}


export default SortedButton