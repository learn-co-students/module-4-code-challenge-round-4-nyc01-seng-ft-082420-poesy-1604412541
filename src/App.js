import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then((poems) => {
      this.setState({
        poems: poems
      })
    })
  }

  clickHandler = () => {
    console.log("clicked")
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }))

  }

addNewPoem = (newPoem) => {
  // console.log(newPoem)
  let copyOfPoems = [...this.state.poems, newPoem]
  this.setState({
    poems: copyOfPoems
  })
}

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {(this.state.showForm) && <NewPoemForm addNewPoem={this.addNewPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
