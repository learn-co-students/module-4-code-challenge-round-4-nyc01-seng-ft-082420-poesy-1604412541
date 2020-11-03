import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map((el) => <Poem key={el.id} poem={el}/>)
  }
  render() {
    console.log(this.props.poems)
    return (
      <div className="poems-container">
        {
          // render poems here
          this.renderPoems()
        }
      </div>
    );
  }
}

export default PoemsContainer;
