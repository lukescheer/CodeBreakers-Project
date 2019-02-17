import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import '../css/PostThreads.css'

function getTags(){
   var tagList = ["C", "Python", "JavaScript", "Java"]; //TODO: store tags in backend and retrieve them here 
   return tagList;
}

class PostThread extends Component {
   render(){
      return (
         <div className="PostThread">
            <h1>Post Thread </h1>
            <Col>
               <Row> 
                  <Col>
                     <div className="title"> 
                        Post Title
                     </div>
                  </Col>
                  <Col>
                     <div className="author">
                        Post Creator
                     </div>
                  </Col>
               </Row>

               <Row>
                  <div className="post-contents">
                     This is the contents of the question
                        <div class="taglist">
                           <a>Tag1 </a>
                           <a>Tag2 </a>
                           <a>Tag3 </a>
                           <a>Tag4 </a>
                           <a>Tag5 </a>
                           <a>Tag1 </a>
                           <a>Tag2 </a>
                           <a>Tag3 </a>
                           <a>Tag4 </a>
                           <a>Tag5 </a>
                           <a>Tag1 </a>
                           <a>Tag2 </a>
                           <a>Tag3 </a>
                           <a>Tag4 </a>
                           <a>Tag5 </a>
                           <a>Tag1 </a>
                           <a>Tag2 </a>
                           <a>Tag3 </a>
                           <a>Tag4 </a>
                           <a>Tag5 </a>
                           <a>Tag1 </a>
                           <a>Tag2 </a>
                           <a>Tag3 </a>
                           <a>Tag4 </a>
                           <a>Tag5 </a>
                           <a>Tag1 </a>
                           <a>Tag2 </a>
                           <a>Tag3 </a>
                           <a>Tag4 </a>
                           <a>Tag5 </a>
                        </div>
                  </div>   
               </Row>

               <Row>
                  <div className="reply-contents">
                     This is the contents of the reply
                  </div>
               </Row>
            </Col>

         </div>
      )
   }
}
export default PostThread