import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    formShown: false
  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
      .then(resp=>resp.json())
      .then(data=>{ this.setState({ poems: data }) })
  }

  formShowHideClickHandler = () => {
    this.setState((prevState) => ({formShown: !prevState.formShown}))
  }

  updatePoems = (newPoem) => {
    
  }

  submitHandler = (newPoem) => {
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newPoem)
    })
    this.setState({
      poems: [...this.state.poems, newPoem]
    })

  }
  
  render() {
    console.log("rendered array: ", this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.formShowHideClickHandler}>Show/hide new poem form</button>
          {this.state.formShown && <NewPoemForm submitHandler={this.submitHandler}/>}
        </div>
        <PoemsContainer poems={this.state.poems} />
      </div>
    );
  }
}

export default App;
