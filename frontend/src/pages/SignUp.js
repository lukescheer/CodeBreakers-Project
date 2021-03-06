import React, { Component } from 'react';
import axios from "axios";
import zxcvbn from 'zxcvbn';
import {Form, Button} from 'react-bootstrap';
import '../css/createPost.css'


// Sign up page

class SignUp extends Component {
    constructor(props) {
        super(props);

        const { minStrength = 5 } = props;



        this.state = {
            email: '',
            username: '',
            password: "",
            suggestions: [],
            emailSucc: true,
            userSucc: true,
            
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;
        
        this.setState({
            [name]: value,
        });
    }
    onPasswordChange = (e) => {
        const password = e.target.value
        const evaluation = zxcvbn(password)
        console.log(evaluation)
        this.setState({
            password,
            score: evaluation.score,
            suggestions: evaluation.feedback.suggestions
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.putDataToDB(this.state.username, this.state.email, this.state.password);
        //this.getDataFromDb();
        //this.setState({userSucc: false, emailSucc: false});
        console.log('This form was submitted with the data:');
        //console.log(this.state.userFail);
        console.log(this.state);
    }

    putDataToDB = (username, email, password) => {
        //console.log(username);
        //console.log(email);
        //console.log(this.state.userSucc);
        axios.post("http://localhost:3001/api/putUser", {
          email: email,
          username: username,
          passWordHash: password
        })
        .then(response => {
            console.log(response.data);
            //console.log("userSuccess:")
            //console.log(response.data.userSuccess);
            this.setState(() =>({userSucc: response.data.userSuccess,
                emailSucc: response.data.emailSuccess
            }), () => {  //callback: code executes after the state is set
                
            });
          });
        //console.log(this.state.userSucc);  //logs userFail value before update
      };

      getDataFromDb = () => {
        fetch("http://localhost:3001/api/getUser")
          .then(user => user.json())
          .then(res => this.setState({ email: res.data }));
      };


    render() {
        let inUse;
        let inUse2;
        console.log("emailSucc:")
        console.log(this.state.emailSucc)
        console.log("userSucc:")
        console.log(this.state.userSucc)
        if (!this.state.emailSucc) {
            inUse = <text className="errorColor">THIS EMAIL IS ALREADY IN USE</text> 
        }
        if (!this.state.userSucc) {
            inUse2 = <text className="errorColor">THIS USERNAME IS ALREADY IN USE</text> 
        }

        return (
            <div className="FormCenter">
                
                <h1>Signup Page</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                
                <form onSubmit={this.handleSubmit} className="FormFields">
                    {inUse}
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter Your Email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    {inUse2}
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="username">Username</label>
                        <input type="username" id="username" className="FormField__Input" placeholder="Enter Your Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter Your Password" name="password" value={this.state.password} onChange={this.onPasswordChange} />
                        <ul>
                            {this.state.suggestions.map((s, index) =>
                                <li key={index}>{s}</li>
                            )}
                        </ul>
                        
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up!</button>
                    </div>

                </form>
            </div>
        );
    }
}
export default SignUp; 
