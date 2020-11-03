import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map(poem => <Poem addToFavorites={this.props.addToFavorites} deleteHandler={this.props.deleteHandler}key={poem.id} poem={poem}  />)
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
