import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Redirect} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import Route from 'react-router-dom/Route';
import SignUp from './SignUp';
import Home from './Home';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

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
        <div>

          { /* NavBar Links
             * Bootstrap Navbar objects used here for to make pretty
            */
          }

          <Navbar bg="light" expand="lg">

            <Navbar.Brand href="/">CodeBreakers</Navbar.Brand>

            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>

          </Navbar>;


          { /* Horizontal Rule to separate */ }


          { /* Path routing for links in navbar */ }

          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
          </div>

        </div>
      </Router>
    );
  }
}




export default App;
