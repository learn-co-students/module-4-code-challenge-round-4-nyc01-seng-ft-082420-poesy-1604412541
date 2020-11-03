import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {




  renderPoems  = () => this.props.poems.map((poem => {

    return <Poem key={poem.id} poem={poem}/>
  })
)

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
