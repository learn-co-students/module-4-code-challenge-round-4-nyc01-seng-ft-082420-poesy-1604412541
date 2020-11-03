import React from "react";
import "./App.css";
import PoemsContainer from "./containers/PoemsContainer";
import NewPoemForm from "./components/NewPoemForm";
import FavsContainer from "./containers/FavsContainer";

class App extends React.Component {

  state={
    poems: [],
    showForm: false,
    favs: []
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

  addToFavs = addPoem => {
    if(this.state.favs.includes(addPoem)) return

    let updatedFavs = [...this.state.favs, addPoem]
    this.setState({favs: updatedFavs})
  }

  delFromFavs = delPoem => {
    let updatedFavs = this.state.favs.filter(poem => poem.id !== delPoem.id)
    this.setState({favs: updatedFavs})
  }

  deleteHandler = delPoem => {
    let updatedPoems = this.state.poems.filter(poem => poem.id !== delPoem.id)

    fetch(`http://localhost:6001/poems/${delPoem.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }
    })
      .then(resp => resp.json())
      .then(this.setState({poems: updatedPoems}))
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.toggleForm} >Show/hide new poem form</button>
          {this.state.showForm && <NewPoemForm createPoem={this.createPoem}/>}
        </div>
        <PoemsContainer poems={this.state.poems} addFav={this.addToFavs} delPoem={this.deleteHandler} />
        <FavsContainer favs={this.state.favs} delFav={this.delFromFavs} />
      </div>
    );
  }
}

export default App;
