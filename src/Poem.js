import React from "react";

class Poem extends React.Component {
  state={
    read: true
  }
  clickHandler = () =>{
    this.setState({read: !this.state.read})
  }
  render() {
    let{title, content, author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.clickHandler}>{this.state.read? "Mark as read" : "Mark as unread"}</button>
      </div>
    );
  }
}

export default Poem;
