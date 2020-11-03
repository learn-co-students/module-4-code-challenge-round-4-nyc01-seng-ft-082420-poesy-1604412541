import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from "./Favorites"

class App extends React.Component {

  state = {
    poems: [],
    favs: [],
    showForm: false
  }

  addNewPoem = (newPoem) => {
    this.setState({
      poems: [...this.state.poems, newPoem]
    })
  }

  favoritePoem = (favPoem) => {
    this.setState({
      favs: [...this.state.favs, favPoem]
    })
  }

  unFavorite = (unFav) => {
    let newFavs = this.state.favs.filter(favs => favs.id !== unFav.id)
    this.setState({
      favs: newFavs
    })
  }

  renderPoems = () => {
    return this.state.poems
  }

  renderFavs = () => {
    return this.state.favs
  }

  formClickHandler = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm    // toggles the form on click
    }))
  }

  render() {
    let arrayOfPoems = this.renderPoems()
    let arrayOfFavorites = this.renderFavs()
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick = {this.formClickHandler}>Show/hide new poem form</button>
          {this.state.showForm ?  <NewPoemForm addPoem = {this.addNewPoem}/> : false }
        </div>
        <div>
          <h2> Poems</h2>
          <PoemsContainer poems = {arrayOfPoems} favPoem = {this.favoritePoem}/>
        </div>
        <div>
          <h2>Favorites</h2>
          <Favorites poems = {arrayOfFavorites} unFav = {this.unFavorite}/>
        </div>
      </div>
    );
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(r=> r.json())
    .then((poemArray)=> {
      this.setState({
        poems: poemArray
      })
    })
  }
}

export default App;
