import React from 'react';

class UncontrolledFrom extends React.Component{

    handleSubmit= event=>{
        event.preventDefault()
        const data={}
        data.name    = event.target.name.value
        data.email   = event.target.email.value
        data.password= event.target.password.value
        console.log(data);
    }
    handlebutton= event =>{
        console.log('clicked');
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control"
                    type="text" 
                    name='name'
                    placeholder='Enter your name'
                    />

                    <input className="form-control"
                    type="email" 
                    name='email'
                    placeholder='Enter your email address'
                    />

                    <input className="form-control"
                    type="password" 
                    name='password'
                    placeholder='Enter your passowrd'
                    />

                    <button
                    className="btn btn-secondary"
                    type='submit'
                    onClick={this.handlebutton}
                    >Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default UncontrolledFrom