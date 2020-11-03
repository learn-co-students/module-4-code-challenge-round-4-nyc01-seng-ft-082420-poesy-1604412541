import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then (r => r.json())
    .then (poems => this.setState({poems: poems}))
    .catch(e => console.error(e))

  }

  showHideHandler = () => {
    this.setState((prevState) => ({showForm: !prevState.showForm}))
  }

  addPoem = poem => {
    let copyOfPoems = [...this.state.poems, poem]
    this.setState({poems: copyOfPoems})
  }



  render() {
    console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showHideHandler}>{!this.state.showForm ? "Show New Poem Form" : "Hide New Poem Form"}</button>
          {this.state.showForm && <NewPoemForm addPoem = {this.addPoem}/>}
        </div>
        <PoemsContainer poems = {this.state.poems}/>
      </div>
    );
  }
}

export default App;
