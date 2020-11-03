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

  handleDelete = () => {
    this.props.deleteHandler(this.props.poem)
  }

  handleFavorite = () => {
    this.props.addToFavorites(this.props.poem)
  }

  render() {
    
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        {this.props.favorite ? null : <button onClick={this.handleClick}>{this.state.clicked ? "Mark as read" : "Mark as unread"}</button>}
        <br/>
        <br/>
        {this.props.favorite ? null : <button onClick={this.handleFavorite}>Favorite this</button>}
        <br/>
        <br/>
        {this.props.favorite ? null : <button onClick={this.handleDelete}>Delete Poem</button>}
      </div>
    );
  }
}

export default Poem;
