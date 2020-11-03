import React from "react";

//handleSubmit = (e) => {
//  e.preventDefault()
 // fetch("http://localhost:6001/poems", {
 //   method: "POST",
//    headers: {
 //     "content-type": "application/json"
 //   },
 //   body: JSON.stringify(this.state)
 // })
 // .then(resp => resp.json())
 // .then((newPoem) => {
 //   this.props.addPoemToState(newPoem)
 // })
//}

class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form" >
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10}  />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
