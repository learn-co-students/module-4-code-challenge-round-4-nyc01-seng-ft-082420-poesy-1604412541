import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map( poem => 
    <Poem 
      key={poem.id}
      poemObj={poem}
      addFavorite={this.props.addFavorite}
    />)
  }

  render() {
    return (
      <div className="poems-container">
        {
          this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;
