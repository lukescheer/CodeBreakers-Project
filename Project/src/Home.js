import React, {Component} from 'react';
import {Container, Col, Row} from 'react-bootstrap'


// Stuff relating to the home page

class Home extends Component {

  // Run when this is loaded.
  componentDidMount() {
    document.title = "CodeBreakers"
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>

          Recommended Posts


          </Col>

          <Col>
          Your Posts

          </Col>

          <Col>

            <Row>

            Your Profile

            </Row>
            
            <Row>
            Messages
            </Row>

          </Col>
        </Row>
      </Container>
    );
  }
}

// Class for scrolling lists, used in post lists + messages
class ScrollingList extends Component {
    constructor(props){
      super(props);
    }

    render(){
      return (
        <h1> scrolling list </h1>
      )
    }
}

// Defines one element in post list
function PostPreview(props){

  return (
    <h1> post </h1>
  )
}


export default Home;
