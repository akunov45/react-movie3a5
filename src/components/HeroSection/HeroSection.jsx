import React from 'react';
import Joker from "../../assets/joker.png"
import movieApi from "../../service/movieService.js";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const HeroSection = () => {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [bgImg, setBgImg] = React.useState("");

  React.useEffect(() => {
    setIsLoading(true)
    movieApi.fetchAllMovies()
        .then(({results}) => {
          console.log(results);
          setMovies(results);
          setBgImg(results[3].backdrop_path)

        })
        .finally(() => {
          setIsLoading(false);
        })
  }, [])

  if(isLoading){
    return   <div className={"flex justify-center pt-[150px]"}>
      <h2 className={"text-[]35px"}>Loading....</h2>
    </div>
  }
  let imgUrl = "https://image.tmdb.org/t/p/original"

  return (
      <div className="max-w-[1300px] mx-auto bg-cover bg-center bg-no-repeat transition-opacity duration-500"
           style={{backgroundImage: `url(${imgUrl}${bgImg})`}}>
        <div className="h-[700px]   text-white">
          <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper h-full bg-gradient-to-t from-[#040404] to-transparen"
              onSlideChange={(swiper) => {
                setBgImg(movies[swiper.activeIndex]?.backdrop_path);
              }}

          >
            {movies.map(item => {
              return <SwiperSlide className="md:pt-[200px] pt-[50px]" key={item.id}>
                <div className="app-container">
                  <h3>Выбор Cinemax</h3>
                  <h3 className="text-[40px] mb-[15px]">{item.title}</h3>
                  <p className="w-[500px] line-clamp-3 mb-[30px] text-[18px]">{item.overview}</p>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
  );
};

export default HeroSection;