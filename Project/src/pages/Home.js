import React, {Component} from 'react';

import {Col, Row, Nav} from 'react-bootstrap'
import Route from 'react-router-dom/Route';
import NavLink from 'react-bootstrap/NavLink';

import '../css/home.css'

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


      <div>
        <Row noGutters={true} style={{height:"90vh"}}>

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

      this.loadPosts();
    }

    /* TODO get from DB instead of static example */
    loadPosts() {

      this.posts = [];

      for (var i=1; i<51; i++){
        this.posts.push(
          {
            "title": "Title # " + i,
            "author": "Author # " + i,
            "postLink": "post" + i,
            "authorLink": "author" + i
          }
        )
      }

    }

    render(){
      return (
        <div className="post-container">
          { /* <PostPreview title="Title" author="Author"/> */ }

          {
            this.posts.map(info =>(
              <PostPreview title={info.title}
                           author={info.author}
                           postLink={info.postLink}
                           authorLink={info.authorLink}
                            key={info.title + info.author} />
            ))
          }

        </div>
      )
    }
}

// Defines one element in post list
function PostPreview(props){

  return (
    <div className="post-preview">

      <Row className="pt-2">
        <Col>
          <a className="px-2" href={props.postLink}>{props.title}</a>
        </Col>
        <Col>
          { /* Oddly, text won't align without this wrapper */ }
          <div className="text-right px-2">
            <a href={props.authorLink}>{props.author}</a>
          </div>
        </Col>
      </Row>



    </div>
  )
}


export default Home;
