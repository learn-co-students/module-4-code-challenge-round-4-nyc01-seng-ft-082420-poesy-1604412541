import React from "react";

class Poem extends React.Component {

  state = {
    read: true,
  }

  clickHandler = (text) => {
    // console.log("read button")
    this.setState(prevState => ({
      read: !prevState.read,
    }))
  }

  render() {
    // console.log(this.props.poem)
    // console.log(this.state)
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.read ? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
