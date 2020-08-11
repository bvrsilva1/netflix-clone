import React, { useState, useEffect } from 'react'
import axios from '../network/axios'
import requests from '../network/requests'
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
    }
    fetchData()
  }, [])

  const truncate = (str, length) => {
    if (str === undefined) return str
    return str.length > length ? str.substring(0, length - 1) + '...' : str
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='bannerContent'>
        <h1 className='bannerTitle'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className='bannerButtons'>
          <button className='bannerButton'>Play</button>
          <button className='bannerButton'>My List</button>
        </div>
        <h1 className='bannerDescription'>{truncate(movie?.overview, 200)}</h1>
      </div>
      <div className='bannerFadedBottom'></div>
    </header>
  )
}

export default Banner
