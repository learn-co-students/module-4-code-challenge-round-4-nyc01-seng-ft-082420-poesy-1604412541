import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import Favorites from "./Favorites";

class App extends React.Component {

  state = {
    poems: [],
    showForm: false,
    favoritePoems: []
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(response => response.json())
    .then(data => this.setState({poems: data}))
  }

  handleClick = () => {
    this.setState( previousState => ({
      showForm: !previousState.showForm
    }))
  }

  newPoemSubmitHandler = (newPoemObj) => {

    let options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(newPoemObj)
    }

    fetch("http://localhost:6001/poems", options)
    .then(response => response.json())
    .then(poemObj => this.setState(
      previousState => ({
        poems: [...previousState.poems, poemObj]
      })
    ))
  }

  addFavorite = (poemObj) => {
    console.log("adding fav: ", poemObj)
    this.setState( previousState => ({
      favoritePoems: [...previousState.favoritePoems, poemObj]
    }))
  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button
            onClick={this.handleClick}
          >Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm newPoemSubmitHandler={this.newPoemSubmitHandler} /> : null }
          <Favorites 
            favoritePoems={this.state.favoritePoems}
          />
        </div>
        <PoemsContainer 
          poems={this.state.poems}
          addFavorite={this.addFavorite} 
        />
      </div>
    );
  }
}

export default App;
