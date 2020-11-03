import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: "",
    content: "",
    author: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(resp => resp.json())
      .then((newPoem) => {
        this.props.addPoem(newPoem)
      })
    // this.resetForm(e)
    this.setState=({
      title: "",
      content: "",
      author: ""
    })

  }

  // resetForm = (e) => {
  //   console.log("reset???")
  //   this.setState=({
  //     title: "",
  //     content: "",
  //     author: ""
  //   })
  // }
  
  render() {
    console.log("FORM", this.state)
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleChange}/>
        <input name="author" placeholder="Author" value={this.state.author} onChange={this.handleChange}/>
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
