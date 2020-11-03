import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  // renderPoems = this.props.poemApi.map((poem) => {
  //   return <Poem key={poem.id} poemObj={poem} />
  // })



  render() {
    return (
      <div className="poems-container">
        { this.props.poemApi.map((poem) => 
     <Poem key={poem.id} poemObj={poem} deletePoem={this.props.deletePoem} />
  )
  }
      </div>
    );
  }
}

export default PoemsContainer;
