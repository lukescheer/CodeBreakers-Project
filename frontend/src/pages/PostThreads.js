import React, { Component } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import '../css/PostThreads.css'
import axios from "axios";

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
   componentDidMount(){
      document.title = "Post Thread";
    }

   constructor(props){
      super(props);
      //this.state = {reply: ''};

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.replyList = ["ReplyText1", "ReplyText2", "ReplyText3"]; 

      this.state = {
          formReply: ''
          //agreement: false
      };
    }

    handleInputChange(event){
      const target = event.target;
      const name = target.id;
      const value = target.value;

      this.setState({
         [name]: value
      });

    }

    handleSubmit(event){
      console.log("Submitted form with data: ");
      console.log(this.state);
      //this.sendPostToDatabase();

      //console.log(this.replyList);
      //console.log(document.getElementById("formReply").value);
      this.replyList.push(String(document.getElementById("formReply").value));
      //console.log(this.replyList);
      this.forceUpdate();
      event.preventDefault(); // TODO should redirect to post after posting this
    }
    
   sendPostToDatabase(){
      axios.post("http://localhost:3001/api/updateReplies", {
        "formTitle": this.state.formTitle,
        "formLink": this.state.formLink,
        "formDescription": this.state.formDescription,
        "tags": this.state.tags,
      });
    }

   render(){
      return (
         <div className="PostThread"  >
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
                           <a className="tag">{getTags.call()[0]} </a>
                           <a className="tag">{getTags.call()[1]} </a>
                           <a className="tag">{getTags.call()[2]} </a>
                           <a className="tag">{getTags.call()[3]} </a>
                           <a className="tag">{getTags.call()[0]} </a>
                           <a className="tag">{getTags.call()[1]} </a>
                           <a className="tag">{getTags.call()[2]} </a>
                           <a className="tag">{getTags.call()[3]} </a>
                           <a className="tag">{getTags.call()[0]} </a>
                           <a className="tag">{getTags.call()[1]} </a>
                           <a className="tag">{getTags.call()[2]} </a>
                           <a className="tag">{getTags.call()[3]} </a>
                           <a className="tag">{getTags.call()[0]} </a>
                           <a className="tag">{getTags.call()[1]} </a>
                           <a className="tag">{getTags.call()[2]} </a>
                           <a className="tag">{getTags.call()[3]} </a>
                        </div>
                  </div>   
               </Row>
               
               <Row>
                  <div >
                     {this.replyList.map(name => (
                        <div className="reply-contents"> {name} </div>
                     ))}
                     
                  </div>
               </Row>
               
               <Form
                  onSubmit={event => this.handleSubmit(event)}
                  onChange={this.handleInputChange}>
                  <Form.Row>
                     <Form.Group className="reply-maker" controlId="formReply">
                        <Form.Label>Add a Reply:</Form.Label>
                        <Form.Control as="textarea" placeholder="Add a Reply" />
                     </Form.Group>
                  </Form.Row>

                  <Button className="button" id="addReply" type="submit">Add Reply</Button>
               </Form>
            </Col>

         </div>
      )
   }
}
export default PostThread