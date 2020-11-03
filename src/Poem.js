import React from "react";

class Poem extends React.Component {

  state = {
    clicked: false
  }

  localClickHandler = (e) => {
    this.setState ( {clicked: !this.state.clicked} )
  }


  // if this.state == "true"
  // button.textContent === "Mark as Unread"

  render() {
    console.log(this.state.clicked)
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>-{this.props.poem.author}</strong>
        </p>
        <button onClick={this.localClickHandler}>
          {this.state.clicked ? "Mark as Unread" : "Mark as Read"}
          </button>
      </div>
    );
  }
}

export default Poem;
