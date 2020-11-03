import React from "react";

class Poem extends React.Component {

  state = {
    read: false
  }

  clickHandler = () => {
    this.setState( (prev) => ({read : !prev.read}))
  }

  localDeleteHandler = () => {
    this.props.deleteHandler(this.props.poem)
  }

  localFavHandler = () => {
    this.props.addToFavs(this.props.poem)
  }

  localUnfaveHandler = () => {
    this.props.unfaveHandler(this.props.poem)
  }

  render() {
    return (
      <div>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>- By {this.props.poem.author}</strong>
        </p>
        {this.props.deleteHandler ? <button onClick={this.clickHandler}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button> : null}
        {this.props.deleteHandler ? <button onClick={this.localDeleteHandler}>Delete</button> : null}
        {this.props.deleteHandler ? <button onClick={this.localFavHandler}>★</button> : <button onClick={this.localUnfaveHandler}>Unfave</button>}
      </div>
    );
  }
}

export default Poem;
