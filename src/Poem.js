import React from "react";

class Poem extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
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
        <button onClick={this.clickHandler}>{!this.state.clicked ? "Mark as Read" : "Mark as Unread"}</button>
      </div>
    );
  }
}

export default Poem;
