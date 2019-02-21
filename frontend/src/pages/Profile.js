import React, {Component} from 'react';
import {Col, Row, Nav} from 'react-bootstrap'


//profile page

class Profile extends Component {
    constructor(props){
      super(props);
      this.state = {  
        numPosts: 1
      };
    }
    
    render(){
        return(
            <div style={{height:"150vh"}}>
                <Row noGutters={true} style={{height:"150vh"}}>
                    <Col>
                        <div className="text-center">
                            {"Your Posts: " + this.state.numPosts}
                            
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
                         postLink={"/postthread"}
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
          <a className="px-2" href={props.postLink}>{props.title} </a>
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

//tag creators
class TagList extends Component {
  constructor(props){
    super(props);

    this.loadTags();
  }

  /* TODO get from DB instead of static example */
  loadTags() {

    this.tags = [];

    for (var i=1; i<51; i++){
      this.tags.push(
        {
          "title": "tag" + i,
        }
      )
    }

  }

  render(){
    return (
      <div className="post-container">
        { /* <PostPreview title="Title" author="Author"/> */ }

        {
          this.tags.map(info =>(
            <PostPreview title={info.title}
             />
          ))
        }

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