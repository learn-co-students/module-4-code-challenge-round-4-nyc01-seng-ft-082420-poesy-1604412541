import React from 'react'
import Poem from './Poem'

class FavoritesContainer extends React.Component {
    
    renderFavorites = () => {
        return this.props.poems.map(x => { return <Poem key={x.id} poem={x} deleter={this.props.deleter} remove={this.props.remove}/>})
    }


    render() {
        return (
            <div className='favorite'> 
            {
                this.renderFavorites()
            }
            
            </div>
        )

        
    }
}

export default FavoritesContainer