import React, {Component} from 'react';

// Stuff relating to the home page

class Home extends Component {

  // Run when this is loaded.
  componentDidMount(){
    document.title = "CodeBreakers"
  }

  render() {
    return (
      <div>
        <h1> Hello, world! </h1>
      </div>
    );
  }
}


export default Home;
