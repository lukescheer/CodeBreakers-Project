import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" render={
              () => {
                return ( <h1>Hello World</h1>);
              }
          }/>

          <Route path="/signup" render={
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
