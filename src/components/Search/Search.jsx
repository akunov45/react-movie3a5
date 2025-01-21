import Input from "../UI/Input/Input.jsx";
import {useEffect, useState} from "react";
import movieApi from "../../service/movieService.js";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("")

  const handelSearch = () => {
    setIsLoading(true);
    movieApi.fetchMovieByName(text)
        .then((res) => {
          console.log(res.results);
          setMovies(res.results);
        })
        .finally(() => {
          setIsLoading(false);
        })
  }

  const handelChange = (e) => {
    setText(e.target.value.trim());
  }

  return (
      <div className={"app-container pb-[150px]"}>
        <h3>Поиск по сайту</h3>
        <p className={"w-[385px] mb-[60px]"}>На нашем сайте вы найдете подходящие вам фильмы и сериалы</p>
        <div className={"flex "}>
          <Input onChange={handelChange} value={text} hintText={"Поиск..."}/>
          <button onClick={handelSearch} className={"bg-[green] p-[10px]"}> search</button>
        </div>
        {isLoading &&  <h4>Loading....</h4>}
        <div className={"h-[400px] overflow-y-scroll"}>
          {movies.length > 0 && movies.map((movie) => {
            let url = 'https://image.tmdb.org/t/p/original'
            return (
                <div className={"flex items-center mb-1 border border-b "} key={movie.id}>
                  <img className={"w-[160px] h-[160x]"} src={url + movie.poster_path} alt=""/>
                  <h4 className={"text-[33px] pl-[20px]"}> {movie.title}</h4>
                </div>
            )
          })}
        </div>

      </div>
  );
};

export default Search;