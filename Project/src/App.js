import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = () => {
  return (<h1>Welcome User</h1>)
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
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
          <Route path="/user" exact ={
              () => {
                return ( <h1>Signup Page</h1>);
              }
          }/>
        </div>
      </Router>
    );
  }
}

export default App;
