import React from "react";

class Poem extends React.Component {
  render() {
    let {author, content, title} = this.props.poem
    // console.log(author,content,title)
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button>Mark as read</button>
      </div>
    );
  }
}

export default Poem
