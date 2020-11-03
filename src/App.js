import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false
  }

  toggleForm = () => {
    this.setState((prev) => ({showForm: !prev.showForm}))
  }

  addNewPoem = (poem) => {
    const configObj = {
      method: "POST",
      headers: {
        "content-type" : "application/json",
        accept: "application/json"
      }, 
      body: JSON.stringify(poem)
    }
    fetch(`http://localhost:6001/poems`, configObj)
    .then(res => res.json())
    .then(res => this.setState( prev => ({
      poems: [...prev.poems, res]
    })))
    .catch(error => console.log(error.message))
  }

  componentDidMount() {
    fetch(`http://localhost:6001/poems`)
    .then(res => res.json())
    .then(res => this.setState(() => ({poems: res})))
    .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.addNewPoem}/> : null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
