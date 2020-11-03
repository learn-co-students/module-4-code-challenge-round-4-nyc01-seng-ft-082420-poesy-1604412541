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

  deletePoem = (e) => {
    let poemToDelete = this.props.poem
    fetch(`http://localhost:6001/poems/${poemToDelete.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(()=>{
        this.props.deletePoem(poemToDelete)
      })
    
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
        <button onClick={this.buttonClickHandler}>{this.state.read ? `Mark as unread` : `Mark as read`}</button> <button onClick={this.deletePoem}>Delete</button>
      </div>
    );
  }
}

export default Poem;
