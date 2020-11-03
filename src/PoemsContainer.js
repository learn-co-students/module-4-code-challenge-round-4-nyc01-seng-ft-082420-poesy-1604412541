import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    //console.log(this.props.poems)

    // started to begin writing fav poems except when you refresh it goes away need to come back and fix that 
    console.log(this.props.favPoem)
    return (
      <div className="poems-container">
        {
          // render poems here
          this.props.poems.map(p => {
            return <Poem poem={p} favoritePoem={this.props.favoritePoem}/>

          })

          
        }
        <h1> My Favorite Poems </h1>
        {
          this.props.favPoem.map(p => {
            return <Poem poem={p} favoritePoem={this.props.favoritePoem}/>

          })
        }
      </div>
    );
  }
}

export default PoemsContainer;
