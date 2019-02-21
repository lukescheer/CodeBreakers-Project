import React, { Component } from 'react';
//import Popup from "reactjs.popup";
import { Redirect } from 'react-router-dom';
//user login
/*class Popup extends React.Component
{
    render()
    {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close</button>
          </div>
        </div>
      );
    }
  }*/
class Login extends Component
{
    constructor(props)
    {
        super(props)
        this.state =
        {
            username: '',
            password: '',
            //showPopup = false,
        };
        //this.goBack = this.goBack.bind(this);
    }
    togglePopup = () =>
    {
        this.setState({
          showPopup: !this.state.showPopup
        });
      }
    handleChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }
    handleCheck = (e) =>
    {
        e.preventDefault();
        this.togglePopup.bind(this);
        console.log('This form was submitted with the data:');
        console.log(this.state);

        
    }
    /*goBack(e)
    {
        e.preventDefault();
        console.log("go Back");
    }*/
    
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
                <a href="#" onClick={this.goBack}>
                Back
                </a>
            </div>
        );
    }
}
export default Login;