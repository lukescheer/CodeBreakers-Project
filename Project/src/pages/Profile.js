import React, {Component} from 'react';
import {Col, Row, Nav} from 'react-bootstrap'


//profile page

class Profile extends Component {
    constructor(props){
      super(props);
        const numPosts = 0;
      this.state = {  
        numPosts: 0
      };
    }
    
    render(){
        return(
            <div style={{height:"150vh"}}>
                <Row noGutters={true} style={{height:"150vh"}}>
                    <Col>
                        <div className="text-center">
                            {"Your Posts: " + 0}
                            
                        </div>
                        <PublicPosts />
                    </Col>
                    <Col>
                        <div className="text-center">
                            Your Tags
                        </div>
                        <TagList />
                    </Col>
                    <Col>
                      <div className="text-center">
                        <Nav.Link href="/settings">Settings</Nav.Link>
                      </div>
                    </Col>
                </Row>
            </div>
        );
    }
}


//Using PublicPosts and PostPreview from Home.js
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

//tag creators
class TagList extends Component {
  constructor(props){
  super(props);
}

render(){
  return (
    <div className="tag-container">
      <TagPreview />
      <TagPreview />
      <TagPreview />
      <TagPreview />
    </div>
  )
}
}

function TagPreview(props){

  return (
    <div className="tag-preview">
  
      <Row>
        <Col>
          <div className="px-2">Example Tag</div>
        </Col>
      </Row>
    </div>
  )
  }

export default Profile