import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
state={
  hasNew:false
}

renderPoems=()=>{
  return this.props.poems.map(poem => <Poem key={poem.id} poem={poem} favHandle={this.favHandle}/>)
}

  render() {
    return (
      <div className="poems-container">
        {this.renderPoems() }
      </div>
    );
  }
}

export default PoemsContainer;
