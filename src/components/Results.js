import React, { useEffect, useState } from 'react'
import VideoCard from "./VideoCard"
import tmdb from '../tmdb'
import '../index.css'

const Results = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await tmdb.get("/tv/popular")
            setMovies(data.results)
        }
        fetchData();
    }, [])

    return (
        <div className="mb-10 flex pb-5 px-5 overflow-x-auto">
            {movies.map((movie, index) => (
                <h2>
                    < VideoCard key={index} {...movie} />
                </h2>
            ))}
        </div>
    )
}

export default Results

// bg-[#1b2530]