import React, { Component } from 'react';

// Sign up page

class SignUp extends Component {

    componentDidMount(){
      document.title = "Sign Up"
    }

    render() {
        return (
            <div className="SignUp">
                <h1>Signup Page</h1>
            </div>
        );
    }
}
export default SignUp;
