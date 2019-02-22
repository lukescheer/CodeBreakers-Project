import React, { Component } from 'react';
//import Popup from "reactjs.popup";
import { Redirect } from 'react-router-dom';
//import App from './App.js';
//import Cookies from 'js-cookie';
import SignUp from './SignUp';
//user login

class Login extends Component
{
    constructor(props)
    {
        super(props)

        this.state =
        {
            username: '',
            password: '',
            fail: false
        };
        //this.goBack = this.goBack.bind(this);
    }
    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value,
        });
    }
    handleCheck = (e) =>
    {
        e.preventDefault();
        //this.togglePopup.bind(this);
        //signUpHandle();
        //this.props.signUpHandler();
        console.log('This form was submitted with the data:');
        console.log(this.state);

        if(this.state.username == "Avik" && this.state.password  == "Singh")
        {
            console.log('logged in!');
        }
        else
        {
            this.setState({fail: true});
            console.log('Try again');
            //console.log(this.state.fail);
        }
    }
    /*goBack(e)
    {
        e.preventDefault();
        console.log("go Back");
    }*/
    
    render() {
        
        let message;
        if(this.state.fail)
        {
            message =  <text className ="errorColor">These usernames and passwords are not valid</text> 
        }
        else
        {
            message =  <text> Please enter a valid username and email</text> 
        }
        return (
            
            <div className="Formcenter">

                <h1>Login</h1>
                {message}
                <form onSubmit={this.handleCheck} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="username">Username</label>
                        <input type="username" id="username" className="FormField__Input" placeholder="Enter Your Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter Your Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Login</button>
                    </div>
                </form>
                <a href="#" onClick={this.goBack}>
                Back
                </a>
            </div>
        );
    }
}
export default Login;