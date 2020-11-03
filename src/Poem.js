import React from "react";

class Poem extends React.Component {

  state = {
    read: false,
    clicked: false
  }


  onButtonClick = () => {
    this.setState((prevState) => ({
      read: !prevState.read
    }))
  }

  onFavButtonClick = () => {
    this.setState((prevState) => ({
      clicked: !prevState.clicked
    }))
    this.props.clicker(this.props.poem)
    
    
  }

  onDeleteButtonClick = () => {
    let id = this.props.poem.id

    let config = {
      method: "DELETE"
    }

    fetch(`http://localhost:6001/poems/${id}`, config).then(resp => resp.json()).then(data => {
      console.log(data)
      this.props.remove()
    })
  }
  

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
        <button onClick={this.onButtonClick}>{this.state.read ? "Mark as Unread" : "Mark as Read" } </button>
        <button onClick={this.onFavButtonClick}> Add to Favorites</button>
        <button onClick={this.onDeleteButtonClick}> Delete</button>
      </div>
    );
  }
}

export default Poem;
