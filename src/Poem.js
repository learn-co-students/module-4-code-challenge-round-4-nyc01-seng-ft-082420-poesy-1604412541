import React from "react";

class Poem extends React.Component {

  state={
    clicked: false,
    readText: "Mark as Read",
    notReadText: "Mark as Unread"
  }

  changeHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked
    }))
  }

  // localDeleteHandler = () => {
  //   this.props.deleteHandler(this.props.poem.id)
  // }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={this.changeHandler}>{this.state.clicked ? this.state.notReadText : this.state.readText}</button>
        {/* <button onClick={this.localDeleteHandler}>Delete?</button> */}
      </div>
    );
  }
}

export default Poem;
