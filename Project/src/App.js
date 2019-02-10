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

  constructor(props){
    super(props);

    this.state = {
      loggedIn: false,
    }

  }

  signUpHandle = () => {
    this.setState({loggedIn:true})
  }

  render() {

    // Change Log In to Log Out when user is signed in,
    // Do not offer signed-in users to Sign Up

    var loginOpt;

    if (!this.state.loggedIn){
      loginOpt = <Nav className="mr-right">
                 <Nav.Link href="/login">Log In</Nav.Link>
                 <Nav.Link href="/signup">Sign Up</Nav.Link>
                 </Nav>
    }

    else{
      // Not sure how we will be linking to user profiles...

      loginOpt = <Nav className="mr-right">
                 <Nav.Link href="/me">My Profile</Nav.Link>
                 <Nav.Link href="/logout">Log Out</Nav.Link>
                 </Nav>
    }

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

              { /* Search Form */ }
              <Form inline>
                <FormControl type="text" placeholder="Search" />
                <Button type="submit">Search</Button> { /* TODO How to make this actually go somewhere? */ }
              </Form>

            </Nav>


            {loginOpt}

          </Navbar>


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
