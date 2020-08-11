import React from 'react'
import './App.css'
import Row from './components/Row'
import Banner from './components/Banner'
import requests from './network/requests'

function App() {
  return (
    <div className='app'>
      <Banner />
      <Row
        title='NETFLIX ORIGINALS'
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
