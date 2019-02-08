import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({params}) => {
  return (<h1>Welcome User {params.username} </h1>)
}

class App extends Component {
  state = {
    loggedIn:false
  }
  
  signUpHandle = () => {
    this.setState({loggedIn:true})
  }
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={
                {color: 'blue'}
              }>Home</NavLink>
            </li>
            <li>
              <NavLink to="/signup/" exact activeStyle={
                {color: 'blue'}
              }>Sign Up</NavLink>
            </li>
          </ul>
          <Route path="/" exact render={
              () => {
                return ( <h1>Hello World</h1>);
              }
          }/>
          <Route path="/signup/" exact render={
              () => {
                return ( <h1>Signup Page</h1>);
              }
          }/>

          <input type="button" value="Sign Up" onClick to="/signup/" />
          
        </div>
      </Router>
    );
  }
}

export default App;
