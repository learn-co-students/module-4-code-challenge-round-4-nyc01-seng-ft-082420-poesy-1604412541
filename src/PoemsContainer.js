import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    let allPoems = this.props.poems
    return allPoems.map(poem => <Poem key={poem.id} poem={poem} favoriteHandler={this.props.favoriteHandler} />)
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
