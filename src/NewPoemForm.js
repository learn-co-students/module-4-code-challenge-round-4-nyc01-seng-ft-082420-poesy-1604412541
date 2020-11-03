import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form className="new-poem-form" onSubmit={(e) => {
        e.preventDefault()
        let object = {
          title:e.target[0].value,
          content:e.target[2].value,
          author:e.target[1].value
        }
        // had to play around with numbers to get title and author to actually match 

        // console.log(object)
        // console.log(e.target[1].value)
         this.props.submitHandler(object)
        }}>
          
        <input placeholder="Title" />
        <input placeholder="Author" />
        <textarea placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
