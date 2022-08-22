import React, { useEffect, useState } from 'react'
import VideoCard from "./VideoCard"
import axios from 'axios'
import requests from '../requests'


const Results = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchTrending)
            console.log(request)
            setMovies(request.data.results)
            return request
        }
        fetchData();
    }, [])

    return (
        <div className='results'>
            {movies && movies.map((movie) => (
                <h2>
                    < VideoCard movie={movie} />
                </h2>
            ))}
        </div>
    )
}

export default Results