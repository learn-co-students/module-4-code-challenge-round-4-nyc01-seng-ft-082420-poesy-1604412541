import React from "react";

class Poem extends React.Component {

  state = {
    read: true
  }

  handleClick = () => {
    this.setState( previousState => ({
      read: !previousState.read
    }))
  }

  render() {
    return (
      <div>
        <h3>{this.props.poemObj.title}</h3>
        <p>{this.props.poemObj.content}</p>
        <p>
          <strong>- {this.props.poemObj.author}</strong>
        </p>
        <button onClick={this.handleClick} >{ this.state.read ? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
