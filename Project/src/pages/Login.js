import React, { Component } from 'react';
//import Popup from "reactjs.popup";
import { Redirect } from 'react-router-dom';
//user login
class Login extends Component
{
    constructor()
    {
        super()
        this.state = 
        {
            username: '',
            password: '',
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleCheck(e)
    {
        //console.log("user inputted this data");
        /*console.log(this.state);
        noerror: 0;
        if(noerror == 0)
        {
            Popup.alert('Password does not match username')
        }
        else
        {
            //log the user in
            //ie switch user to homepage
            return <Redirect to = '/target_homepage'/>
        }*/
        e.preventDefault();

        console.log('This form was submitted with the data:');
        console.log(this.state);
    }
    
    render() {
        return (
            <div className="Formcenter">
                
                <h1>Login</h1>
                
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
            </div>
        );
    }
}
export default Login