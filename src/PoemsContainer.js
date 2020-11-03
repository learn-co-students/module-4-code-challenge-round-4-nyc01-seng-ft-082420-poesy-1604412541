import React from "react";
import Poem from "./Poem";






class PoemsContainer extends React.Component {

  

  renderPoems = () => {
    return this.state.poems.map((poemPojo) => 
      <Poem key={poemPojo.id} poem={poemPojo}/>
    
    )
  }

  render() {
    return (
      <div className="poems-container">
        {<Poem/>}
        <div>
          {this.renderPoems()}
        </div>
      </div>
    );
  }
}

export default PoemsContainer;
