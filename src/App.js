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
    .then(response => response.json())
    .then(data => this.setState({poems: data}))
  }

  handleClick = () => {
    this.setState( previousState => ({
      showForm: !previousState.showForm
    }))
  }

  newPoemSubmitHandler = (newPoemObj) => {

    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newPoemObj)
    }

    fetch("http://localhost:6001/poems", options)
    .then(response => response.json())
    .then(poemObj => this.setState(
      previousState => ({
        poems: [...previousState.poems, poemObj]
      })
    ))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button
            onClick={this.handleClick}
          >Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm newPoemSubmitHandler={this.newPoemSubmitHandler} /> : null }
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
