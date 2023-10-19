import movies from "../../data/movies";
import Title from "../Title";
import Pagination from "../Pagination";
import Item from "../items/Item";
import Footer from "../Footer";
import "../../styles/top.css";
function Top() {
  const moviesLength = movies.length;
  return (
    <div className="top-imdb">
      <Title title="Top IMDB Rating" />
      <Pagination nombreMovies={moviesLength}/>
      <div className="list-Movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Item
                src={movie.src}
                title={movie.title}
                rate={movie.rate}
                type={movie.type}
                year={movie.year}
              />
            </div>
          );
        })}
      </div>
      {/* <Pagination /> */}
      <Footer />
    </div>
  );
}
export default Top;
