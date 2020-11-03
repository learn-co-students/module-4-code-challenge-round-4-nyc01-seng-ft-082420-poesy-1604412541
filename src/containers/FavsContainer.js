import React from 'react'
import Poem from '../components/Poem'

const FavsContainer = ({favs, delFav}) => {

  const renderFavs = () => {
    return favs.map((poem) => <Poem key={poem.id} poem={poem} delFav={delFav} favorited={true}/>)
  }

  return(
    <div className="poems-container">
      <h1>Favorites</h1>
      {
        renderFavs()
      }
    </div>
  )
}

export default FavsContainer