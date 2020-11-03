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

/* createPoem() will fetch and post the new poem, and set the poems key to include this new poem*/

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.clickHandler}>Show/hide new poem form</button>
          {this.state.clicked && <NewPoemForm />}
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
