import React from 'react'
import styles from './InputItem.module.css'
import TextField from '@material-ui/core/TextField';
import plus from '../Item/images/plus.svg';


class InputItem extends React.Component {

  state = {
	 input: ''	
};

onClickAdd = () => {
 	const {input} = this.state;
 		if(input){
 		this.props.onClickAdd(input)
 		this.setState({input: ''});
 		}
}

inputChange = event => {
 	this.setState({input: event.target.value})
 	}
 	
render () {

 const {input} = this.state;

 return (<div className = {styles.input}>
 	<TextField className = {styles.field}
 		onChange = {this.inputChange}
 	  value = {input}
    label="Добавить задание"
    id="filled-size-small"
    
    size="small"
   />
   <img src = {plus} className = {styles.btn}onClick = {this.onClickAdd}/>
 </div>);
 }
}


export default InputItem;