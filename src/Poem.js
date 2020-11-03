import React from "react";

class Poem extends React.Component {

  state = {
    read: true,
    fav: false
  }

  handleClick = () => {
    this.setState( previousState => ({
      read: !previousState.read
    }))
  }

  handleAddFavClick = () => {
    this.props.addFavorite(this.props.poemObj)
    this.setState({
      fav: true
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.poemObj.title}</h3>
        <p>{this.props.poemObj.content}</p>
        <p>
          <strong>- {this.props.poemObj.author}</strong>
        </p>
        {this.props.favorite ? null : <button onClick={this.handleClick} >{ this.state.read ? "Mark as read" : "Mark as unread"}</button>}
        {this.props.favorite || this.state.fav ? null : <button
          onClick={this.handleAddFavClick}
        >Favorite</button>}
        
      </div>
    );
  }
}

export default Poem;
