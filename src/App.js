import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import FavoritesContainer from './FavoritesContainer'

class App extends React.Component {

  state = {
    poems: [],
    clicked: false,
    favorites: []
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

  addToFavorites = (poemToFavorite) => {
    let newArray = [...this.state.favorites, poemToFavorite]
    this.setState({ favorites: newArray })
  }

  render() {
    
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.handleClick}>Show/hide new poem form</button>
          {this.state.clicked && <NewPoemForm submitHandler={this.submitHandler}/>}
            <br/>
            <br/>
            <hr/>
          <FavoritesContainer favorites={this.state.favorites}/>
        </div>
        <PoemsContainer addToFavorites={this.addToFavorites} deleteHandler={this.deleteHandler} poems={this.state.poems}/>
        
      </div>
    );
  }
}

export default App;
