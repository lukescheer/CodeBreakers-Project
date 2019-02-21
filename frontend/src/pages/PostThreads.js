import React, { Component } from 'react';
import { Form, Col, Row } from 'react-bootstrap';
import '../css/PostThreads.css'

function getTitle(){
   var title = "Post Title"; //TODO: get title from db
   return title;
}

function getAuthor(){
   var author = "Post Creator"; //TODO: get author from db
   return author;
}

function getPostText(){
   var postText = "This is the text of the post"; //TODO: get post text from db
   return postText;
}

function getTags(){
   var tagList = ["C", "Python", "JavaScript", "Java"]; //TODO: store tags in backend and retrieve them here 
   return tagList;
}



function getReplies(){
   var replyList = ["ReplyText1", "ReplyText2", "ReplyText3"]; //TODO: store replies with post information and retrieve them here
   return replyList;
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
                        <text>
                           <a>{getTitle.call()}</a>
                        </text>
                     </div>
                  </Col>
                  <Col>
                     <div className="author">
                        <text>
                           <a>{getAuthor.call()}</a>
                        </text>
                     </div>
                  </Col>
               </Row>

               <Row>
                  <div className="post-contents" >
                     <text>
                        <a>{getPostText.call()}</a> 
                     </text>
                        <div class="taglist">
                           <a>{getTags.call()[0]} </a>
                           <a>{getTags.call()[1]} </a>
                           <a>{getTags.call()[2]} </a>
                           <a>{getTags.call()[3]} </a>
                           <a>{getTags.call()[0]} </a>
                           <a>{getTags.call()[1]} </a>
                           <a>{getTags.call()[2]} </a>
                           <a>{getTags.call()[3]} </a>
                           <a>{getTags.call()[0]} </a>
                           <a>{getTags.call()[1]} </a>
                           <a>{getTags.call()[2]} </a>
                           <a>{getTags.call()[3]} </a>
                           <a>{getTags.call()[0]} </a>
                           <a>{getTags.call()[1]} </a>
                           <a>{getTags.call()[2]} </a>
                           <a>{getTags.call()[3]} </a>
                           <a>{getTags.call()[0]} </a>
                           <a>{getTags.call()[1]} </a>
                           <a>{getTags.call()[2]} </a>
                           <a>{getTags.call()[3]} </a>
                        </div>
                  </div>   
               </Row>

               <Row>
                  <div className="reply-contents">
                     <a>{getReplies.call()[0]}</a>
                  </div>
               </Row>
            </Col>

         </div>
      )
   }
}
export default PostThread