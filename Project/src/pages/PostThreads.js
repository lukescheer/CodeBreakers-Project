import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

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