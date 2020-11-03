import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  submitHandler = (e) => {
    e.preventDefault()
    let options = {
      method: "POST",
      headers: {
        "accepts" : "application/json",
        "content-type" : "application/json"
      },
      body: JSON.stringify(this.state)
    }

    fetch("http://localhost:6001/poems", options)
    .then(r=>r.json())
    .then(newPoem => this.props.addPoem(newPoem))

  }

  changeHandler = (e) => {
    // console.log('change')
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit = {this.submitHandler}>
        <input
          name = "title"
          placeholder="Title"
          onChange = {this.changeHandler}
          value = {this.state.title}
          />
        <input
          name = "author"
          placeholder="Author"
          onChange = {this.changeHandler}
          value = {this.state.author}
          />
        <textarea
          name = "content"
          placeholder="Write your masterpiece here..."
          rows={10}
          onChange = {this.changeHandler}
          value = {this.state.content}
          />
        <input
          type="submit"
          value="Share your masterpiece"
          />
      </form>
    );
  }
}

export default NewPoemForm;
