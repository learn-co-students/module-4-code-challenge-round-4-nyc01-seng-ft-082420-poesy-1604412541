import React from "react";

class Poem extends React.Component {

  state = {
    clicked: true
  }

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  render() {
    
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        <button onClick={this.handleClick}>{this.state.clicked ? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
