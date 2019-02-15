import React, {Component} from 'react';
import {Col, Row, Nav} from 'react-bootstrap'
import Route from 'react-router-dom/Route';
import NavLink from 'react-bootstrap/NavLink';

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
                  <Nav.Link href="/me">My Profile</Nav.Link>
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
          <div className="px-2">Example Post Title</div>
        </Col>
        <Col>
          <div className="text-right px-2">Example Post Author</div>
        </Col>
      </Row>



    </div>
  )
}


export default Home;
