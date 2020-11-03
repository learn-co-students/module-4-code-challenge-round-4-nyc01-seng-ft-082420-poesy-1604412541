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

  deleteHandler = (poemToDelete) => {
    let newArray = [...this.state.poems]
    let deletedPoemArray = newArray.filter(poem => poem.id !== poemToDelete.id)
    this.setState({ poems: deletedPoemArray})

    fetch(`http://localhost:6001/poems/${poemToDelete.id}`,{
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
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
        <PoemsContainer deleteHandler={this.deleteHandler} poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
