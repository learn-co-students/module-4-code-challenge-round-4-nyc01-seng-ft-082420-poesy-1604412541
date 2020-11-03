import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: "",
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
          "content-type": "application/json",
          accepts: "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then((newPoem) => {
      console.log(newPoem)
    })
  }
  render() {
    // console.log(this.state)
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/>
        <input name="author" placeholder="Author" value={this.state.author} onChange={this.changeHandler}/>
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
