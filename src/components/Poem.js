import React from "react";

class Poem extends React.Component {
  
  state={
    read: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      read: !prevState.read
    }))
  }

  render() {
    const {title, content, author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
      </div>
    );
  }
}

export default Poem;
