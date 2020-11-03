import React from "react";

class NewPoemForm extends React.Component {
  state={
    title: "",
    author: "",
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
      fetch('http://localhost:6001/poems', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
      .then(resp => resp.json())
      .then((createPoem) => {
        this.props.addPoem(createPoem)
      })
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.handleSubmit}>
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange} />
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." name="content" value={this.state.content} onChange={this.handleChange} rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
