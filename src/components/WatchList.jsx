import React from 'react'
import MovieCard from './MovieCard'

const WatchList = ({ watchList, removeMovie }) => {

    const movieDisplay = watchList.map((movie) => {
        return <MovieCard movie={movie} removeMovie={removeMovie} watchList={watchList} />
    })

    return (
        <div className='watchlist'>
            <h1>My Watchlist</h1>
            <div className="movie-container">
                {movieDisplay}
            </div>
        </div>
    )
}

export default WatchList