import Pagination from "../Pagination";
import Title from "../Title";
import Footer from "../Footer";
import Item from "../items/Item";
import movies from "../../data/movies";
import "../../styles/movies.css";
function Movies() {
  
  return (
    <div className="movies">
      <Title title="Popular Movies" />
      <Pagination />
      <div className="list-Movies">
        {movies.map((movie) => {
          return (
            <div key={movie.id}>
              <Item
                title={movie.title}
                src={movie.src}
                rate={movie.rate}
                type={movie.type}
                year={movie.year}
              />
            </div>
          );
        })}
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
export default Movies;
