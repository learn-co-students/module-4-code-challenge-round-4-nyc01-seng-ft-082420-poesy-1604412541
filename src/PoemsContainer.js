import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
// my API should be help in App - this is probably why the POST doesn't update DOM automatically
// and page needs to refresh in order to dispay new Poem
  state={
    poems: []
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(poems => this.setState({ poems}))
  }

  renderPoems = () => {
    return this.state.poems.map((el) => < Poem key={el.id} poem={el} />)
  }

  render() {
    // console.log()
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
