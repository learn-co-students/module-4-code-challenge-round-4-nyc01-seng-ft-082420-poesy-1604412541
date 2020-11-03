// on click show form
//on submit, submit form

import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: "",
    author: "",
    content: "",
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  localSubmitHandler = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState({ title: "", author: "", content: ""})
  }

  render() {
    return (
      <form className="new-poem-form" onSubmit={this.localSubmitHandler}>
        <input name="title" text="text" placeholder="Title" value={this.state.title} onChange={this.changeHandler} />
        <input name="author" text="text" placeholder="Author" value={this.state.author} onChange={this.changeHandler} />
        <textarea name="content" text="text" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.changeHandler} />
        {/* <input type="submit" value="Share your masterpiece" />  */}
        <button>Share your masterpiece</button>
      </form>
    );
  }
}

export default NewPoemForm;
