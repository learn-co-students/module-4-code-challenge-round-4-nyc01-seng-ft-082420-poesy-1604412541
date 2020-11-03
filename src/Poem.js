import React from "react";

class Poem extends React.Component {

  handleDelete = (e) => {
    fetch(`http://localhost:6001/poems/${this.props.id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then((resp) => [
      this.props.deletePoem(this.props.poemObj.id)
    ])
  }

  render() {
    let {title, content, author} = this.props.poemObj
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>{author}</strong>
        </p>
        <button onClick={this.handleDelete}>Mark as read</button>
      </div>
    );
  }
}

export default Poem;
