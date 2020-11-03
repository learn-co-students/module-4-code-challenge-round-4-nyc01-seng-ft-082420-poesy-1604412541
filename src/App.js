import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    clicked: false
  }

  submitHandler = (newPoem) => {
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
        accepts: "application/json" 
      },
      body: JSON.stringify(newPoem)
    })
    .then(res => res.json())
    .then(poem => this.setState({poems: [...this.state.poems, poem]}
      ))
  }
  formClickHandler = (e) => {
    this.setState({isClicked: !this.state.isClicked})
  }
  showForm = () => {
    return this.state.isClicked? <NewPoemForm submitHandler={this.submitHandler} /> : null
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formClickHandler}  >Show/hide new poem form</button>
          {this.showForm()}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
