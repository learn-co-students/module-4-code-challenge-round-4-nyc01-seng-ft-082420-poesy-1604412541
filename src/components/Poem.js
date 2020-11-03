import React from "react";

export default class Poem extends React.Component {
  state = {
    isClicked: false
  }


  render(){
    const poem = this.props.poem
    return(
      <div>
        <h3>{poem.title}</h3>
        <p>{poem.content}</p>
        <h3>-By {poem.author}</h3>
      </div>
    )
  }
}
