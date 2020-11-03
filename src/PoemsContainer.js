import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  state = {
    poems: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems') 
    .then(response => response.json())
    .then(data => this.setState({ poems: data }))
  }

  returnPoems = () => {
    return this.state.poems
  }

  renderPoem = () => {
    return this.state.poems.map(info => <Poem key={info.id} title={info.title} content={info.content} author={info.author} />)
  }

  newPoemRender = (newPoem) => {
    // let newPoem = this.props.newPoem
    let poemCopy = [...this.state.poems, newPoem]
    console.log(newPoem)
    this.setState({ poems: poemCopy })
  }

  

  render() {
    console.log("NEW PROP", this.props.newPoem)
    // console.log(this.state.poems)
    return (
      <div className="poems-container">
        {this.renderPoem()}
        {this.newPoemRender()}
      </div>
    );
  }
}

export default PoemsContainer;
