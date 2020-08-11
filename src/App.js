import React from 'react'
import './App.css'
import Row from './components/Row'
import requests from './network/requests'

function App() {
  return (
    <div className='App'>
      <h1>Hello</h1>
      <Row title='Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  )
}

export default App
