import React from 'react'
import styles from './Item.module.css'
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';

const Item = ({value, isDone, onClickDone, id, onClickDelete,onClickAdd}) => (

	<div className = {styles.list}>
		<Checkbox className = {styles.box}
		 color="primary"
		 onClick = {() => onClickDone(id)}
		/>
		<p className= {classnames({
		[styles.item]: true,
		[styles.done]: isDone
		})}>
		{value}
		</p>
	 <div onClick = {() => onClickDelete(id)}
		className = {styles.delete}>
	 </div>
	</div>
	)

Item.defaultProps = {

    isDone: false

};



export default Item
