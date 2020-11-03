import React from "react";

class Poem extends React.Component {

  state = {
    unread: true
  }

  clickHandler = (e) => {
    //added CSS Styling to make text greyed out when marked read
    this.state.unread ? e.target.parentNode.className = "read" : e.target.parentNode.className = "unread"

    this.setState((prevState) => ({
      unread: !this.state.unread
    }))
  }

  render() {
    let {author, content, title} = this.props.poem
    // console.log(author,content,title)
    return (
      <div className = "unread">
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button onClick = {this.clickHandler}> {this.state.unread ? "Mark as Read" : "Mark as Unread"}</button>
        <button onClick = {this.deletePoem}> Delete Poem </button>
      </div>
    );
  }
}

export default Poem
