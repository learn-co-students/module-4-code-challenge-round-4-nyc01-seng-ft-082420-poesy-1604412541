import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
    clicked: false
  }

  submitHandler = (poem) => {
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(poem)
    })
    .then(response => response.json())
    .then(poem => this.setState({ poems: [...this.state.poems, poem] }))
    .catch(console.log)
  }

  clickHandler = (e) => {
    // on click, render the form
    // if clicked ? renderForm : do nothing
    this.setState( {clicked: !this.state.clicked } )
  }

  render() {
    console.log(this.state.clicked)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>
            Show/hide new poem form
            </button>
            {this.state.clicked ? <NewPoemForm submitHandler={this.submitHandler}/> : console.log("must click form to display")}
          {/* {false && <NewPoemForm submitHandler={this.submitHandler} onClick={this.updateClickHandler}/>} */}
        </div>
        <PoemsContainer />
      </div>
    );
  }
}

export default App;
