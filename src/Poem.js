import React from "react";

class Poem extends React.Component {

  state = {
    unread: true
  }

  clickHandler = (e) => {
    this.setState((prevState) => ({
      unread: !this.state.unread
    }))
  }

  render() {
    let {author, content, title} = this.props.poem
    // console.log(author,content,title)
    return (
      <div clasName = "unread">
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button onClick = {this.clickHandler}> {this.state.unread ? "Mark as Read" : "Mark as Unread"}</button>
      </div>
    );
  }
}

export default Poem
