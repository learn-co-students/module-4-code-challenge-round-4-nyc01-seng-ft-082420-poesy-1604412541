import React from "react";
import "./App.css";
import PoemsContainer from "./containers/PoemsContainer";
import NewPoemForm from "./components/NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
    showForm: false
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
      .then(resp => resp.json())
      .then(poems => this.setState({poems}))
  }

  toggleForm = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm
    }))
  }

  createPoem = newPoem => {
    fetch('http://localhost:6001/poems', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(newPoem)
    })
      .then(resp => resp.json())
      .then(poem => {
        let updatedPoems = [...this.state.poems, poem]
        this.setState(() => ({poems: updatedPoems}))
      })
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm} >Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm createPoem={this.createPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
