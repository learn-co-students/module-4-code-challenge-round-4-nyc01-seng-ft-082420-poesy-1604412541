import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  
  
  renderPoems = () => {
    return this.props.allPoems.map((poemObj) => <Poem key={poemObj.id} poem={poemObj} removePoem={this.props.removePoem} />)
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
