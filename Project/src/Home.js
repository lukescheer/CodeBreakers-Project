import React, {Component} from 'react';
import {Nav, Col, Row} from 'react-bootstrap'


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

          <Col lg={2}>

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
        <div className="post-container">
          <PostPreview />
          <PostPreview />
          <PostPreview />
          <PostPreview />
        </div>
      )
    }
}

// Defines one element in post list
function PostPreview(props){

  return (
    <div className="post-preview">

      <Row>
        <Col>
          <Nav.Link href="/postthread">Example Post Title</Nav.Link>
        </Col>
        <Col>
          <div className="text-right px-2">Example Post Author</div>
        </Col>
      </Row>



    </div>
  )
}


export default Home;
