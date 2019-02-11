import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class PostThread extends Component {
   render(){
      return (
         <div className="PostThread">
            <h1>Post Thread </h1>
            <Row> 
               <Col>
                  <div className="PostTitle"> 
                     Post Title
                  </div>
               </Col>
               <Col>
                  <div className="PostCreator">
                     Post Creator
                  </div>
               </Col>
            </Row>

            <Row>
               <div className="InitialPost">
                  This is the contents of the question
               </div>   
            </Row>

            <Row>
               <div className="Reply1">
                  This is the contents of the reply
               </div>
            </Row>
         </div>
      )
   }
}