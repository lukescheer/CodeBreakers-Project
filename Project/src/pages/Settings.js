import React, { Component } from 'react';
import zxcvbn from 'zxcvbn';

// Sign up page

class Settings extends Component {
    constructor(props) {
        super(props);

        const { minStrength = 5 } = props;



        this.state = {
            email: '',
            username: '',
            password: "",
            suggestions: []
            //agreement: false
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
        
        console.log('This form was updated with the data:');
        console.log(this.state);
    }

    render() {
        return (
            <div className="FormCenter">
                
                <h1>Settings</h1>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="email">Email: </label>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="username">Username: </label>
                    </div>
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="username">Username</label>
                        <input type="username" id="username" className="FormField__Input" placeholder="Enter Your New Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Lable" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter Your New Password" name="password" value={this.state.password} onChange={this.onPasswordChange} />
                        <ul>
                            {this.state.suggestions.map((s, index) =>
                                <li key={index}>{s}</li>
                            )}
                        </ul>
                        
                    </div>
                    <div className="FormField">
                        <button className="FormField__Button mr-20">Update Information</button>
                    </div>

                </form>
            </div>
        );
    }
}
export default Settings; 