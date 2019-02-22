import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import '../css/createPost.css'

/*
  Apparently unnecessary
*/

/*
  True if post ID exists in databse
*/
function IDIsTaken(){
    return false; // TODO check if ID is stored in database
                  // (once database is done)
}

/*
  Returns an unused 11 digit base 32 post ID.
  This is a big number - this loop won't take long.

*/
function randomPostID(){
  var num = Math.random().toString(36).substr(2, 11);

  while (IDIsTaken(num)){
    num = Math.random().toString(36).substr(2, 11);
  }

  return num;
}

class PostForm extends Component {
    constructor(props){
      super(props);
      this.state = {title: '', body: '', link:''};

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.tags = ["C", "Python", "JavaScript", "Java", "Other Tags"];

      this.state = {
          formTitle: '',
          formLink: '',
          formDescription: "",
          tags: []
          //agreement: false
      };
    }

    handleInputChange(event){
      const target = event.target;
      const name = target.id;
      const value = target.type === 'checkbox' ? target.checked : target.value;

      if (target.type === 'checkbox'){
        if (target.checked){
          this.state.tags.push(name);
        }
        else{
          var index = this.state.tags.indexOf(name);

          if (index > -1){
            this.state.tags.splice(index, 1);
          }
        }
      }

      else{
        this.setState({
          [name]: value
        });
      }

    }

    handleSubmit(event){
      console.log(this.state);
      event.preventDefault();
    }

    render() {
      return (

        <div className="form-wrapper">
          <h3>
          Create a New Post
          </h3>

          <Form
          onSubmit={e => this.handleSubmit(e)}
          onChange={this.handleInputChange}>
            <Form.Row>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="An Interesting Title" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formLink">
                <Form.Label>Link to Code</Form.Label>
                <Form.Control type="text" placeholder="Github Link" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="tags">
                <Form.Label> Tags </Form.Label>
                <br />

                { /* Pull checklist values from predefined array */
                  this.tags.map(name => (
                    <Form.Check inline label={name} type="checkbox" id={`${name}`}/>
                  ))
                }

              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Provide as many details as necessary" />
              </Form.Group>
            </Form.Row>

            <Button type="submit">Create Post</Button>

          </Form>
        </div>
      );
    }
}

class CreatePost extends Component {

  componentDidMount(){
    document.title = "Create Post";
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <PostForm />
      </div>
    );
  }

}

export default CreatePost;
