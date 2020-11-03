import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  addNewPoem = (newPoem) => {
    this.setState({
      poems: [...this.state.poems, newPoem]
    })
  }

  renderPoems = () => {
    return this.state.poems
  }

  formClickHandler = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm    // toggles the form on click
    }))
  }

  render() {
    let arrayOfPoems = this.renderPoems()
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.formClickHandler}>Show/hide new poem form</button>
          {this.state.showForm ?  <NewPoemForm addPoem = {this.addNewPoem}/> : false }
        </div>
        <PoemsContainer poems = {arrayOfPoems} />
      </div>
    );
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(r=> r.json())
    .then((poemArray)=> {
      this.setState({
        poems: poemArray
      })
    })
  }
}

export default App;
