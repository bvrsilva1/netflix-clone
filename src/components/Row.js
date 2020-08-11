import React, { useState, useEffect } from 'react'
import axios from '../network/axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const posterBaseUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isOriginalsRow }) => {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState('')

  const youtubeOptions = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          //get url parameters
          const urlParams = new URLSearchParams(new URL(url).search)
          //get parameter 'v'
          setTrailerUrl(urlParams.get('v'))
        })
        .catch((error) => console.log('error: ', error))
    }
  }

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='rowPoster'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`poster ${isOriginalsRow && 'posterOriginals'}`}
            src={`${posterBaseUrl}${
              isOriginalsRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={youtubeOptions} />}
    </div>
  )
}

export default Row
