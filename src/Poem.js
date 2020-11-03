import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  buttonClickHandler = (e) => {
    this.setState((prevState) => ({
      read: !prevState.read
    }))
  }
  render() {
    let {title, content, author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.buttonClickHandler}>{this.state.read ? `Mark as unread` : `Mark as read`}</button>
      </div>
    );
  }
}

export default Poem;
