import React from 'react'
import styles from './Item.module.css'
import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types'

class Item extends React.Component {
state = {
    isEdit: false,
    value: this.props.value
    
}

changeEdit = () => {
     this.setState({ isEdit: !this.state.isEdit })
    }
	updateValue = () => {
        this.setState({ isEdit: false,
        value: this.refs.theTextInput.value });
    }
    // componentDidMount() {
	// 	this.timeID = setInterval(() => console.log('componentDidMount'), 1000)
	// }

	// componentDidUpdate() {
	// 	console.log('componentDidUpdate')
	// }
	
	// componentWillUnmount() {
	// 	clearInterval(this.timeID);
	// }


	render() {
		const {value, isDone, onClickDone, id, onClickDelete,onClickAdd, filter, date, item} = this.props;
  const {isEdit, val} = this.state;
 if(this.state.isEdit) {
         return (   <div>
            <input
            type = 'text'
            defaultValue = {this.state.value}
            ref = 'theTextInput'

            />
            <button onClick = {this.changeEdit}>x</button>
            <button onClick = {this.updateValue}>Ok</button>
            </div>)
        }
            else {
		return (
            <div className = {styles.list}>
		<Checkbox className = {styles.box}
		 color="primary"
		 onClick = {() => onClickDone(id)}
		/>
      

    <span>
 		<p className= {classnames({
		[styles.item]: true,
		[styles.done]: isDone
		})}
      onDoubleClick = {this.changeEdit}
    >
		{this.state.value}
		</p>

    <p>{date} <span>{new Date().toLocaleDateString()}</span> </p>
    </span>
	 <div onClick = {() => onClickDelete(id)}
		className = {styles.delete}>
	 </div>
	</div>)}

	Item.propTypes = {
     
     isDone: PropTypes.bool.isRequired,
     id: PropTypes.number.isRequired,
     onClickDone: PropTypes.func.isRequired,
     onClickDelete: PropTypes.func.isRequired,
     onClickAdd: PropTypes.func.isRequired,
     value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,

  ])


};

	}
}



export default Item
