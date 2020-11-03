import React from "react";
import Poem from "./Poem";

//switched to functional component

const PoemsContainer = (props) => {

  let renderPoems = (props) => {
    return props.poems.map(poem => {
      return <Poem
        key = {poem.id}
        poem = {poem}
        favPoem = {props.favPoem}
        />
    })
  }

    return (
      <div className="poems-container">
        {
        renderPoems(props)
        }
      </div>
    );
}

export default PoemsContainer;

// class PoemsContainer extends React.Component {
//
//   renderPoems = () => {
//     return this.props.poems.map(poem => {
//       return <Poem
//         key = {poem.id}
//         poem = {poem}
//         />
//     })
//   }
//
//   render() {
//     console.log(this.props)
//     return (
//       <div className="poems-container">
//         {
//         this.renderPoems()
//         }
//       </div>
//     );
//   }
// }
//
// export default PoemsContainer;
