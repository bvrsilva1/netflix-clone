import React from 'react'
import './App.css'
import Row from './components/Row'
import requests from './network/requests'

function App() {
  return (
    <div className='App'>
      <Row
        title='Originals'
        fetchUrl={requests.fetchNetflixOriginals}
        isOriginalsRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action' fetchUrl={requests.fetchActionMovies} />
    </div>
  )
}

export default App
