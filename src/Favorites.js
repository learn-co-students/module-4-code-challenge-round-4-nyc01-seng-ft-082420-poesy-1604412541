import React, { Component } from 'react'

export class Favorites extends Component {

    // state = {
    //     favorites: []
    // }

    // componentDidMount = () => {
    //     fetch("http://localhost:6001/favorites")
    //     .then(resp => resp.json())
    //     .then(poems => {
    //         this.setState({favorites: poems})
    //     })
    //     .catch(console.log)
    // }

    renderPoems = () => {
        let favPoems = this.props.poems
        return favPoems.map(poem => <li key={poem.id}><h5>{poem.title} - {poem.author}</h5></li> )
    }

    // renderPoems2 = () => {
    //     let favPoems = this.state.favorites
    //     return favPoems.map(poem => <li key={poem.id}><h5>{poem.title} - {poem.author}</h5></li> )
    // }

    contolFavorites = () => {
        if(this.props.poems.length === 0) {
            return <li>You have not favorited any poems yet</li>
        } else {
            return this.renderPoems()
        }
    }

    // contolFavorites2 = () => {
    //     console.log(this.state.favorites)
    //     if(this.state.favorites.length === 0) {
    //         return <li>You have not favorited any poems yet</li>
    //     } else {
    //         return this.renderPoems2()
    //     }
    // }

    render() {
        return (
            <div>
                <div className="favs">Favorite Poems</div>
                <div className="fav-container">
                <ul>{this.contolFavorites()}
                </ul>
                </div>
            </div>
        )
    }
}

export default Favorites
