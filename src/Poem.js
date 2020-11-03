import React from "react";

class Poem extends React.Component {
  render() {
    let poem = this.props.poem
    // console.log(poem)
    return (
      <div>
        <h3>{poem.title}</h3>
        <p>{poem.content}</p>
        <p>
          <strong>{poem.author} </strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
