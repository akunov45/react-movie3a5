import axios from "../axios/index.js";

class MovieService {
  async fetchAllMovies() {
    try {
      const {data, status} = await axios.get('discover/movie?language=ru')
      if (!status === 200) {
        throw new Error("Error fetching Movies");
      }
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async fetchMovieByName(movieName){
    try {
      const {data, status} = await axios.get(`search/movie`,{
        params: {
          query: movieName,
          language: 'ru'
        }
      })
      if(!status === 200) {
        throw new Error("Error  fetching movie by name ")
      }
      console.log(data)
      return data
    } catch (err) {
      console.error(err)
    }
  }
}

const movieApi = new MovieService();
export default movieApi;