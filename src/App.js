import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from './Favorites'

class App extends React.Component {

  state = {
    poems: [],
    form: false,
    title: "",
    author: "",
    content: "",
    favorites: []
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
    .catch(console.log)
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

    fetch("http://localhost:6001/poems", options)
    .then(resp => resp.json())
    .then(createdPoem => {
      let newPoems = [...this.state.poems, createdPoem]
      this.setState({
        poems: newPoems
      })
      this.changeForm()
    })
    .catch(console.log)

  }

  favoriteHandler = poem => {
    let newFavorites = [...this.state.favorites, poem]
    this.setState({
      favorites: newFavorites
    })
  }

  deleteHandler = poemId => {
    let deleteId = poemId
    let currentPoems = this.state.poems
    let filteredPoems = currentPoems.filter(poem => poem.id !== deleteId)
    let options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Accept: "application/json"
      }
    }
    fetch("http://localhost:6001/poems/" + deleteId, options)
    .then(resp => resp.json())
    .then(
      this.setState({
        poems: filteredPoems
      })
    )
    .catch(console.log)
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.changeForm}>Show/hide new poem form</button>
          {this.state.form ? <NewPoemForm changeHandler={this.changeHandler} submitHandler={this.submitHandler} /> : null}
          <Favorites poems={this.state.favorites}/>
        </div>
        <PoemsContainer deleteHandler={this.deleteHandler} favoriteHandler={this.favoriteHandler} poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
