import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  changeHandler = (e) =>{
    this.setState({ [e.target.name]: e.target.value })
    // console.log(e.target.value)
  }

  submitHandler = (e) =>{
    e.preventDefault()
    
    fetch("http://localhost:6001/poems/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(poem => (this.props.addPoem(poem)))    
  }


  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler} >
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandler}  />
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.changeHandler}  />
        <textarea placeholder="Write your masterpiece here..." name="content" value={this.state.content} onChange={this.changeHandler} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
