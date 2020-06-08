import React from 'react'
import styles from './InputItem.module.css'
import TextField from '@material-ui/core/TextField';


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
 		<TextField
 		  onChange = {this.inputChange}
 		  value = {input}
          label="Добавить задание"
          id="filled-size-small"
          variant="filled"
          size="small"
        />
        <button className = {styles.btn}onClick = {this.onClickAdd}>Добавить</button>
        </div>);
 }
}


export default InputItem;