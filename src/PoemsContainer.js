import React from "react";
import Poem from "./Poem";


class PoemsContainer extends React.Component {
  state = {
    poems: []
  }
  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(res => res.json())
    .then(data => this.setState({
      poems: data
    }))
  }
  // submitHandler = (newPoem) => {
  //   fetch("http://localhost:6001/poems", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "Application/json",
  //       accepts: "application/json" 
  //     },
  //     body: JSON.stringify(newPoem)
  //   })
  //   .then(res => res.json())
  //   .then(poem => this.setState({poems: [...this.state.poems, poem]}
  //     ))
  // }
  
  render() {
   let poemArray = this.state.poems.map(poemObj => <Poem key={poemObj.id} poem={poemObj} />)
    return (
      <div className="poems-container">
        {
          poemArray
        }
      </div>
    );
  }
}

export default PoemsContainer;
