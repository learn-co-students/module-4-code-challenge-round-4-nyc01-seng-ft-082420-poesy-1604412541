import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    //console.log(this.props.poems)
    return (
      <div className="poems-container">
        {
          // render poems here
          this.props.poems.map(p => {
            return <Poem poem={p}/>

          })

          
        }
      </div>
    );
  }
}

export default PoemsContainer;
