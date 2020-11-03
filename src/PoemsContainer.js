import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderData = () =>{
    return this.props.poems.map(poem=><Poem key={poem.id} poem={poem} />)
  }
  render() {
    let poemList = this.renderData()
    return (
      <div className="poems-container">
        {poemList}
      </div>
    );
  }
}

export default PoemsContainer;
