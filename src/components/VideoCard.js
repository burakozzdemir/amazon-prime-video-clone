import React from 'react'

const VideoCard = ({ movie }) => {

    const base_url = "https://image.tmdb.org/t/p/";

    return (
        <div className='videoCard'>
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="" />
        </div>
    )
}

export default VideoCard

