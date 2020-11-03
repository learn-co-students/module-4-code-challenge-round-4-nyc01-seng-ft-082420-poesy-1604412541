import React from "react";

class Poem extends React.Component {
  state={
    read: false
  }

  readHandler = () => {
    this.setState((prevState) => {
      return {
        read: !prevState.read
      } 
    })
  }

  deleteHandler = () => {
    fetch(`http://localhost:6001/poems/${this.props.poem.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then((data) => {
        this.props.removePoem(this.props.poem)
      })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.readHandler}>{this.state.read ? "Mark as unread" : "Mark as read" } </button>
        <button onClick={this.deleteHandler}> Delete </button>
      </div>
    );
  }
}

export default Poem;
