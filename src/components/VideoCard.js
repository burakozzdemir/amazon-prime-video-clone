import React from 'react'
import '../index.css'



const VideoCard = ({ first_air_date, name, poster_path }) => {

    const getPosterUrl = (posterpath) => {
        return (`https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`)
    }

    return (
        <div className='flex flex-col pl-5 gap-2'>
            <img  src={getPosterUrl(poster_path)} alt={name} className="mt-6 w-[150px] h-[225px] shadow-sm rounded-md" />
            <div className='flex flex-col px-3 w-[150px]'>
                <h1 className='font-bold'>{name}</h1>
                <p className='font-normal text-slate-500'>{first_air_date}</p>
            </div>
        </div>
    )
}

export default VideoCard
