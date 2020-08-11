import React, { useState, useEffect } from 'react'
import axios from '../network/axios'
import './Row.css'

const posterBaseUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isOriginalsRow }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      console.log(request.data.results)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='rowPoster'>
        {movies.map((movie) => (
          <img
            className={`poster ${isOriginalsRow && 'posterOriginals'}`}
            key={movie.id}
            src={`${posterBaseUrl}${
              isOriginalsRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
