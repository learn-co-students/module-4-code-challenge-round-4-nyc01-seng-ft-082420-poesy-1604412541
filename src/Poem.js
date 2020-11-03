import React from "react";

class Poem extends React.Component {
  state = {
    isClicked: false,
    read: 'Mark as read'
  }

  clickHandler = () => {
    this.setState({isClicked: !this.state.isClicked})
    this.state.isClicked? this.setState({read: 'Mark as read'}) : this.setState({read: 'Mark as unread'})
  }

  render() {
    const poem = this.props.poem
    return (
      <div>
        <h3>{poem.title}</h3>
        <p>{poem.content}</p>
        <p>
          <strong>- By {poem.author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.read}</button>
      </div>
    );
  }
}

export default Poem;
