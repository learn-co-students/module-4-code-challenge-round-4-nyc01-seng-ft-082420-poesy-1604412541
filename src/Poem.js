import React from "react";





class Poem extends React.Component {


  render() {
   

    console.log()
    return (
      <div>
        <h3>Title</h3>
        <div>{poems.title}</div>
        <p>Content</p>
        <p>
          <strong>- By Author</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
