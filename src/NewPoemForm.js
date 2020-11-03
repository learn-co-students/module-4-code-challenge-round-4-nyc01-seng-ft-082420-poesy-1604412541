import React from "react";

class NewPoemForm extends React.Component {
  state={
    title:'',
    content:'',
    author:''
  }

  submitHandler = e =>{
    e.preventDefault()

    let{title, content, author} = this.state
    const options={
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content,
        author: author
      })
    }

    fetch('http://localhost:3000/poems', options)
    .then(resp=>resp.json())
    .then(poem=>{
      this.props.addNewPoem(poem)
    })
    this.setState({title:'', content:'', author:''})
  }

  changeHandler = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    let{title, content, author} = this.state
    return (
      <form className="new-poem-form" onSubmit={this.submitHandler}>
        <input name="title" placeholder="Title" value={title} onChange={this.changeHandler}/>
        <input name="author" placeholder="Author" value={author} onChange={this.changeHandler}/>
        <textarea name="content" placeholder="Write your masterpiece here..." rows={10}  value={content} onChange={this.changeHandler}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
