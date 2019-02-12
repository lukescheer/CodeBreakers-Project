import React, {Component} from 'react';

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

class CreatePost extends Component {

  componentDidMount(){
    document.title = "Create Post";
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div> {randomPostID()}</div>
    );
  }


}

export default CreatePost;
