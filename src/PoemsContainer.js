import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  state= {
    poems: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then (r => r.json())
    .then (poems => this.setState({poems: poems}))
    .catch(e => console.error(e))

  }

  renderPoems  = () => this.state.poems.map((poem => {

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
