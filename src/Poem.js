import React from "react";

class Poem extends React.Component {

  state = {

    clicked: false
  }

  clickHandler = (e) =>{
    this.setState(previousState => ({
      clicked: !previousState.clicked
    }))
  }

  deleteHandler = (e) =>{
    fetch(`http://localhost:6001/poems/${this.props.poem.id}`,{
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(resp => (this.props.deletePoem(this.props.poem)))
  }


  render() {

    let { title, content, author } = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>-{author}</strong>
        </p>
        <div onClick={this.clickHandler}>
        {this.state.clicked ? <button>Mark as unread</button> : <button>Mark as read</button> } 
        </div><button onClick={this.deleteHandler}>Delete Poem</button>
      </div>
    );
  }
}

export default Poem;
