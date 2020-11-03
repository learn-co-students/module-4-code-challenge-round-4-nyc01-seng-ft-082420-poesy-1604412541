import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: "",
    author: "",
    content: ""
  }

  submitHandler = (e) => {
    e.preventDefault()
    // console.log('submit')

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
