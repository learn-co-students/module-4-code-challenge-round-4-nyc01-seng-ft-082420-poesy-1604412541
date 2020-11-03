import React from "react";
import Poem from "./Poem";

class Favorites extends React.Component {

  renderPoems = () => {
    return this.props.poems.map(poem => {
      return <Poem
        key = {poem.id}
        poem = {poem}
        favorite = ""
        />
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="poems-container">
        {
        this.renderPoems()
        }
      </div>
    );
  }
}

export default Favorites;
