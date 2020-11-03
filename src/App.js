import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer'

class App extends React.Component {


  state = {
    poemsList: [],
    favoritePoems: [],
    showForm: false
  }

  fetchPoems = () => {
    fetch('http://localhost:6001/poems').then(resp => resp.json()).then(data => this.setState({
        poemsList: data
    }))
  }

  onFormButtonClick = () => {
    this.setState((prevState) => ({
      showForm: !prevState.showForm
    }))
  }

  

  getPoems = () => {
    let poems = this.state.poemsList
    return poems
  }

  postPoemSubmit = (poemObj) => {
    let newPoemsList = [...this.state.poemsList, poemObj]
    this.setState({
      poemsList: newPoemsList
    })
  }

  addPoemToFavorites = (poemObj) => {
    let newFavorites = [...this.state.favoritePoems, poemObj]
    this.setState({
      favoritePoems: newFavorites
    })
  }

  getFavorites = () => {
    let favoritesList = this.state.favoritePoems
    return favoritesList
  }

  removeFromFavorites = (poemObj) => {
    let favorites = [...this.state.favoritePoems]
    let newFavorites = favorites.filter(x => {
      return x.id !== poemObj.id
    })

    this.setState({
      favoritePoems: newFavorites
    })
  }

  // deletePoem = (poemObj) => {
  //   let currentPoems = [...this.state.poemsList]
  //   //let currentFavorites = [...this.state.favoritePoems]

  //   let newPoems = currentPoems.filter(x => {return x !== poemObj})
  //   //let newFavorites = currentFavorites.filter(x => {return x.id !== poemObj.id})

  //   this.setState({
  //     poemsList: newPoems
  //   })

  //   // //this.setState({
  //   //   favoritePoems: newFavorites
  //   // })

  // }

  deletePoem = () => {
    this.fetchPoems()
  }

  componentDidMount() {
    this.fetchPoems()
  }

  
  


  render() {
    const poemsArray = this.getPoems()
    const favPoemsArray = this.getFavorites()
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.onFormButtonClick}>Show/hide new poem form</button>
          
          {this.state.showForm ? <NewPoemForm submitter={this.postPoemSubmit}/> : console.log("form is hidden")}
        </div>
        <PoemsContainer poems={poemsArray} clicker={this.addPoemToFavorites} remove={this.deletePoem}/>
        <FavoritesContainer poems={favPoemsArray} deleter={this.removeFromFavorites} remove={this.deletePoem}/>
      </div>
    );
  }
}

export default App;


//{false && <NewPoemForm />}