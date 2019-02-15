import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap'


//profile page

class Profile extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{height:"150vh"}}>
                <Row noGutters={true} style={{height:"150vh"}}>
                    <Col>
                        <div className="text-center">
                            Your Posts
                        </div>
                        <PublicPosts />
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
export default Profile