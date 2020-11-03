import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map( poem => <Poem addToFavs={this.props.addToFavs} deleteHandler={this.props.deleteHandler} key={poem.id} poem={poem}/>)
  }
  render() {
    return (
      <div className="poems-container">
        <h1>All Poems</h1>
        {
          this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;
