import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    clicked: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
    .then(resp => resp.json())
    .then(poems => {
      this.setState({ poems: poems })
    })
  }

  handleClick = () => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  submitHandler = (newPoemObj) => {
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(newPoemObj)
    })
    .then(resp => resp.json())
    .then(newPoem => {
      this.setState(() => ({
        poems: [...this.state.poems, newPoem]
      }))
    })
  }

  render() {
    console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.clicked && <NewPoemForm submitHandler={this.submitHandler}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
