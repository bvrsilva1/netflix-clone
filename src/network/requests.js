const API_KEY = '39c4d3c5186bcf807651f4b691ac911e'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&landuage=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&landuage=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&landuage=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
}

export default requests
