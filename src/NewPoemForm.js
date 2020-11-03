import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: '',
    author: '',
    content: ''
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state)
  }

  submitHandler = (e) => {
    e.preventDefault()

    const config = {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(this.state)
    }

    fetch('http://localhost:6001/poems', config)
    .then(response => response.json())
    .then(newPoem => {this.props.addNewPoem(newPoem)})
  }


  render() {
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler} >
        <input placeholder="Title" name="title" value={this.state.title} onChange={this.changeHandler} />
        <input placeholder="Author" name="author" value={this.state.author} onChange={this.changeHandler} />
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10} value={this.state.content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
