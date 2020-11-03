import React from "react";

class Poem extends React.Component {
  state={
    read:false
  }
markRead=()=>{
  this.setState(prevState=>({read:!prevState.read}))
}

favoriteHandler=()=>{
  this.props.favHandle(this.props.poem)
}

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- {this.props.poem.author}</strong>
        </p>
      <button onClick={this.markRead}>{this.state.read? "Mark as unread": "Mark as read"}</button>
      <button>Favorite</button>
      </div>
    );
  }
}

export default Poem;
