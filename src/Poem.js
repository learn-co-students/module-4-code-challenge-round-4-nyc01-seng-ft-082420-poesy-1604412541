import React from "react";

class Poem extends React.Component {

  state = {
    unread: true
  }

  favPoem = (e) => {
    if (this.props.favPoem) {
      this.props.favPoem(this.props.poem)
    } else {
      alert("Unfavorite?")
      // this.props.unFav(this.props.poem) //unfavorite not working for some reason
    }
  }

  deletePoem = (e) => {
    let options = {
      method: "DELETE"
    }

    let poemId = this.props.poem.id
    fetch('http://localhost:6001/poems/' + poemId, options)
    .then(r=> r.json())
    .then(console.log)

    this.props.deletePoem(this.props.poem)
  }

  clickHandler = (e) => {
    //added CSS Styling to make text greyed out when marked read
    this.state.unread ? e.target.parentNode.className = "read" : e.target.parentNode.className = "unread"

    this.setState((prevState) => ({
      unread: !this.state.unread
    }))
  }

  render() {
    let {author, content, title} = this.props.poem
    // console.log(author,content,title)
    return (
      <div className = "unread">
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- {author}</strong>
        </p>
        <button onClick = {this.clickHandler}> {this.state.unread ? "Mark as Read" : "Mark as Unread"}</button>
        <button onClick = {this.favPoem}> ❤️ </button>
        <button onClick = {this.props.deletePoem}> Delete Poem </button>
      </div>
    );
  }
}

export default Poem
