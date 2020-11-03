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
        </div>
      </div>
    );
  }
}

export default Poem;
