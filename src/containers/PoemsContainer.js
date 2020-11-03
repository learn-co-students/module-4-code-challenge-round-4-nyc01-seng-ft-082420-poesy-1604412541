import React from "react";
import Poem from "../components/Poem";

const PoemsContainer = ({poems, addFav}) => {

  const renderPoems = () => {
    return poems.map((poem) => <Poem key={poem.id} poem={poem} addFav={addFav}/>)
  }

  return (
    <div className="poems-container">
      <h1>Poems</h1>
      {
        renderPoems()
      }
    </div>
  )
}

export default PoemsContainer;
