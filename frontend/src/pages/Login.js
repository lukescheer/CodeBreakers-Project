import React, { Component } from 'react';
import axios from "axios";
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
            userSucc: false,
            passSucc: false,
            enteredState: false
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
        this.setState({enteredState: true});
        this.checkDB(this.state.username, this.state.password);

        if(this.state.username == "Avik" && this.state.password  == "Singh")
        {
            console.log('logged in!');
        }
        else
        {
            //this.setState({fail: true});
            console.log('Try again');
            //console.log(this.state.fail);
        }
    }

    checkDB = (username, password) => {
        axios.post("http://localhost:3001/api/login", {
          username: username,
          passWordHash: password
        })
        .then(response => {
            console.log(response.data);
            //console.log("userSuccess:")
            //console.log(response.data.userSuccess);
            this.setState(() =>({
                userSucc: response.data.userSuccess,
                passSucc: response.data.passSuccess
            })); 
      });
    };
    /*goBack(e)
    {
        e.preventDefault();
        console.log("go Back");
    }*/
    
    render() {
        
        let message;
        if(this.state.userSucc && this.state.passSucc && this.state.enteredState)
        {
            message =  <text>You have successfully logged in</text> 
        }
        else if(this.state.userSucc)
        {
            message =  <text className ="errorColor"> The password is incorrect.</text> 
        }
        else if(this.state.passSucc){
            message =  <text className ="errorColor"> The username is incorrect.</text>
        }
        else if(this.state.enteredState){
            message =  <text className ="errorColor"> The username is incorrect.</text>
        }
        else{
            message = <text>Please enter your username and password.</text>

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
