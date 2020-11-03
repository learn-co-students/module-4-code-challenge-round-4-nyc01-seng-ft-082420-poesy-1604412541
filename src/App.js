import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    form: false,
    title: "",
    author: "",
    content: ""
  }

  changeHandler = event => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  componentDidMount = () => {
    fetch("http://localhost:6001/poems")
    .then(resp => resp.json())
    .then(poems => {
      this.setState({poems: poems})
    })
  }

  changeForm = () => {
    this.setState(prevState => ({
      form: !prevState.form
    }))
  }

  submitHandler = poem => {
    let newPoem = poem
    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newPoem)
    }
    // console.log(poem)
    // this.changeForm()
    fetch("http://localhost:6001/poems", options)
    .then(resp => resp.json())
    .then(createdPoem => {
      let newPoems = [...this.state.poems, createdPoem]
      this.setState({
        poems: newPoems
      })
    })
    .catch(console.log)

  }

  render() {
    // console.log(this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.changeForm}>Show/hide new poem form</button>
          {this.state.form ? <NewPoemForm changeHandler={this.changeHandler} submitHandler={this.submitHandler} /> : null}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
