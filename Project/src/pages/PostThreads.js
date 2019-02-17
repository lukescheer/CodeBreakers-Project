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
                     <div className="text-center"> 
                        Post Title
                     </div>
                  </Col>
                  <Col>
                     <div className="text-center">
                        Post Creator
                     </div>
                  </Col>
               </Row>

               <Row>
                  <div className="text-center">
                     This is the contents of the question
                  </div>   
               </Row>

               <Row>
                  <div class="scrolling-wrapper">
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  <a href="#about">About</a>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                  </div>
               </Row>

               <Row>
                  <div className="text-center">
                     This is the contents of the reply
                  </div>
               </Row>
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
         </div>
      )
   }
}
export default PostThread