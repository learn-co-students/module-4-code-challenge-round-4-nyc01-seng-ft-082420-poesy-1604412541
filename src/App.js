import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer'


class App extends React.Component {

  state = {
    poems: [],
    showForm: false,
    favs: []
  }

  toggleForm = () => {
    this.setState((prev) => ({showForm: !prev.showForm}))
  }

  unfaveHandler = (poem) => {
    const newFavs = [...this.state.favs]
    const index = newFavs.findIndex( p => p.id === poem.id)
    newFavs.splice(index, 1)
    this.setState(() => ({favs: newFavs}))
  }
  
  deletePoem = (poem) => {
    const newPoems = [...this.state.poems]
    const index = newPoems.findIndex( p => p.id === poem.id)
    newPoems.splice(index, 1)
    const configObj = {
      method: "DELETE",
      headers: {
        "content-type" : "application/json",
        accept: "application/json"
      }
    }
    fetch(`http://localhost:6001/poems/${poem.id}`, configObj)
    .then(res => res.json())
    .then(this.setState(() => ({poems: newPoems})))
    .catch(error => console.log(error.message))

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

  addToFavs = (poem) => {
    if (this.state.favs.filter( p => p.id === poem.id).length > 0) {
      return
    } else {
      this.setState( (prev) => ({
        favs: [...prev.favs, poem]
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm}>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm submitHandler={this.addNewPoem}/> : null}
        </div>
        <PoemsContainer deleteHandler={this.deletePoem} poems={this.state.poems} addToFavs={this.addToFavs}/>
        <FavoritesContainer poems={this.state.favs} unfaveHandler={this.unfaveHandler} />
      </div>
    );
  }
}

export default App;
