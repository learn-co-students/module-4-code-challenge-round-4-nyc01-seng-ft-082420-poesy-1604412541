import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: "",
    author: "",
    content: ""
  }

  /* on change handler to set state */
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /* submit handler to grab this information and pass up to parent */



  render() {
    return (
      <form className="new-poem-form">
        <input name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/>
        <input name="author" placeholder="Author" value={this.state.author} onChange={this.changeHandler} />
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
