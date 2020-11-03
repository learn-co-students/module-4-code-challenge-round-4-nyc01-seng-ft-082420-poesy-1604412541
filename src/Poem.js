import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  readPoem = () => {
    this.setState(prevState => ({
      read: !prevState.read
    }))
  }

  favoriteHandler = () => {
    this.props.favoriteHandler(this.props.poem)
    // console.log(this.props.poem)
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.readPoem} >{this.state.read ? "Mark as unread" : "Mark as read"}</button>
        <button onClick={this.favoriteHandler}>Add to Favorites</button>
      </div>
    );
  }
}

export default Poem;
