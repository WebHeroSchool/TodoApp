import React from 'react'
import styles from './Item.module.css'
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types'

class Item extends React.Component {
	
	componentDidMount() {
		console.log('componentDidMount')
	}

	componentDidUpdate() {
		console.log('componentDidUpdate')
	}
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}


	render() {
		const {value, isDone, onClickDone, id, onClickDelete,onClickAdd} = this.props;
		return (<div className = {styles.list}>
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
	</div>)
	Item.propTypes = {

     isDone: PropTypes.bool.isRequired,
     id: PropTypes.number.isRequired
};

	}
}



export default Item
