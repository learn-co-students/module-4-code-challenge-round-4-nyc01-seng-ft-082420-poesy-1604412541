import React from "react";

class Poem extends React.Component {
  
  state={
    read: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({
      read: !prevState.read
    }))
  }

  favHandler = () => {
    if(this.props.favorited) {
      this.props.delFav(this.props.poem)
    } else {
      this.props.addFav(this.props.poem)
    }
  }

  delHandler = () => {
    this.props.delPoem(this.props.poem)
  }

  render() {
    const {title, content, author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>

        {this.props.favorited ? 
          null : 
          <button onClick={this.clickHandler}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
        }
        <button onClick={this.favHandler}>{this.props.favorited ? "Remove from Favorites" : "Add to Favorites"}</button>
        {this.props.favorited ? 
          null : 
          <button onClick={this.delHandler}>Delete Poem</button>
        }
      </div>
    );
  }
}

export default Poem;
