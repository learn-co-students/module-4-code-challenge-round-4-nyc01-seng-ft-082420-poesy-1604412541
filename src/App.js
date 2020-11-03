import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: [],
    clicked: false
  }

  componentDidMount(){
    fetch(`http://localhost:6001/poems`)
      .then(resp => resp.json())
      .then(poems => (
        this.setState(() => ({
          poems: poems
        }))
      ))
      .catch(console.log)
  }


  clickHandler = () => {
    this.setState((previousState) => ({
      clicked: !previousState.clicked
    }))
  }

/* submitHandler() will grab the information as an arg and create a new object */
  submitHandler = (newPoem) => {
    let newPoemObj = {
      title: newPoem.title,
      author: newPoem.author,
      content: newPoem.content
    }
    this.createPoem(newPoemObj)
  }
/* createPoem() will fetch and post the new poem, and set the poems key to include this new poem*/
  createPoem = (poem) => {
    fetch(`http://localhost:6001/poems`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(poem)
    })
    .then(resp => resp.json())
    .then(newPoemObj => {
      let newPoemArray = [...this.state.poems, newPoemObj]
      this.setState(() => ({
        poems: newPoemArray
      }))
    })
  }

/* Delete stretch goals - create a button in poem. OnClick of that button will take the ID
of that poem object, pass up through props to PoemContainer, then through app. A grandparent function,
deletePoem will take in that id as an argument, then fetch the database, delete as method, create a new array,
filtering for that id and returning those objects that do not match that id.

Kept getting a TypeError for the fetch, so if I had time/was core deliverable, would debug


  deleteHandler = (deletedPoemId) => {
    fetch(`http://localhost:6001/poems/${deletedPoemId}`, {
      method: "DELETE"
  }
    .then(resp => resp.json())
    .then(removedPoem => {
      let filterForRemoved = this.state.maps.filter(poem => poem.id !== removedPoem.id)
      this.setState(() => ({
        poems: filterForRemoved
      }))}
    ))}

*/

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.clicked && <NewPoemForm submitHandler={this.submitHandler}/>}
        </div>
        <PoemsContainer poems={this.state.poems} /*deleteHandler={this.deleteHandler} */ />
      </div>
    );
  }
}

export default App;
