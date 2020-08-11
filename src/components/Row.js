import React, { useState, useEffect } from 'react'
import axios from '../network/axios'

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      //console.table(request.data.results)
      console.log(request.data.results)
      setMovies(request.data.results)
    }
    fetchData()
  }, [fetchUrl])

  return (
    <div>
      <h2>{title}</h2>
      <h2>{fetchUrl}</h2>
      {movies.map((movie) => (
        <img key={movie.id} src={movie.poster_path} alt={movie.name} />
      ))}
    </div>
  )
}

export default Row
