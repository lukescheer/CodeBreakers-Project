import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap'


// Stuff relating to the home page

class Home extends Component {

  // Run when this is loaded.
  componentDidMount() {
    document.title = "CodeBreakers"
  }

  // TODO pass login state here from App.js
  constructor(props){
    super(props);
  }

  render() {
    return (

      <div style={{height:"100vh"}}>
        <Row noGutters={true} style={{height:"100vh"}}>

          <Col>
            <div className="text-center">
              Recommended Posts
            </div>

            <PublicPosts />

          </Col>

          <Col>
            <div className="text-center">
              Your Posts
            </div>

            <PublicPosts />

          </Col>

          <Col>

            <Row>
              <Col>
                <div className="text-center">
                  Your Profile
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="text-center">
                  Messages
                </div>

                <PublicPosts />
              </Col>
            </Row>

          </Col>

        </Row>
      </div>

    );
  }
}

// Class for scrolling lists, used in post lists + messages
class PublicPosts extends Component {
      constructor(props){
      super(props);
    }

    render(){
      return (
        <div style={{width:95 + '%', margin: 0 + " auto"}}>
          <PostPreview />
        </div>
      )
    }
}

// Defines one element in post list
function PostPreview(props){

  return (
    <div className="box">
      alright now ladies, what's cooler, than bein cool?
    </div>
  )
}


export default Home;
