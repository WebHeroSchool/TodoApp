import React from 'react'
import styles from './InputItem.module.css'
import TextField from '@material-ui/core/TextField';
import plus from '../Item/images/plus.svg';
import PropTypes from 'prop-types'


class InputItem extends React.Component {

  state = {
	 input: '',
   error: false,
    errorText: ""
};

onClickAdd = () => {
 	const {input, error,items} = this.state;
 		if(input){
 		this.props.onClickAdd(input)
 		this.setState({input: ''});
 		}
 
 else if (this.props.items.forEach(item => this.state.input === item.value)){
      this.setState({
        error: true ,
       errorText: 'Такое дело уже есть'
     });
    }

   else {
        this.setState({
                error: true,
                errorText: "Поле не должно быть пустым"
            });
    }

}



 

inputChange = event => {
 	this.setState({input: event.target.value})
 	}

 // onClickAdd = () => {
        
 //        const { items} = this.props;
 //        let error = false;
 //        items.forEach(item=>{
 //            if(item.value === this.state.input){
 //                error = true
 //            }
 //        });

 //        if(this.state.input==="" || error){
 //            this.setState({
 //                error: true,
 //                errorText: error ? "Это дело есть в списке": "Поле не должно быть пустым"
 //            });
 //        }else{
 //            this.setState({
 //                input: '',
 //                error: false
 //            });
      
 //          }
 //        }

render () {

 const {input, error, errorText,it} = this.state;

 return (<div className = {styles.input}>
 	<TextField className = {styles.field}
 		onChange = {this.inputChange}
 	  value = {input}
    label="Добавить задание"
    id="filled-size-small"
    onSubmit={this.onSubmit}
    size="small"
   />
   <img src = {plus} className = {styles.btn}onClick = {this.onClickAdd}/>
   <p>{errorText}</p>
 </div>);
 }
}
InputItem.propTypes = {
    onClickAdd: PropTypes.func.isRequired,
   };

export default InputItem;