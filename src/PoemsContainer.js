import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    let renderPoems = this.props.poems.map(poem => <Poem key={poem.id} poem={poem} /> )
    return (
      <div className="poems-container">
        {
          // render poems here
          renderPoems
        }
      </div>
    );
  }
}

export default PoemsContainer;
