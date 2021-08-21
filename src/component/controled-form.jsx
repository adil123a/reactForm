import PropTypes from 'prop-types';
import React from 'react';
import './index.css';
const TextInput=props=>(
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input 
        className='form-control'
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        />
    </div>
)

TextInput.propTypes={
    name:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    placeholder:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,

}
TextInput.defaultProps={
    type:'text',
    label:'',
}

class ControlledForm extends React.Component{
    state={
        name:'',
        email:'',
        password:'',
    }
  
    handleSubmit= event=>{
        event.preventDefault()
        console.log(this.state);
    }
    handleChange=event=>{
        this.setState(
           { [event.target.name]:event.target.value}
        )
    }
    render(){
        const {name,email,password}=this.state
        return(
            <div id='container'>
                <form onSubmit={this.handleSubmit}>

                    <TextInput
                    name='name'
                    label='Name'
                    placeholder='Enter your Name'
                    value={name}
                    onChange={this.handleChange}
                    />

                    <TextInput
                    name='email'
                    label='Email'
                    placeholder='Enter your Email'
                    value={email}
                    onChange={this.handleChange}
                    />

                    <TextInput
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={this.handleChange}
                    />

                    <button
                    className="btn btn-secondary"
                    type='submit'
                    >Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default ControlledForm
