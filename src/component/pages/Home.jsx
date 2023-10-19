import ItemNV from "../items/ItemNV";
import section21 from "../../assets/section21.jpg";
import section22 from "../../assets/section22.jpg";
import section23 from "../../assets/section23.jpg";
import Title from "../Title";
import Item from "../items/Item";
import Footer from "../Footer";
import arrowLeft from "../../assets/images/icons/arrow-left.svg";
import arrowRight from "../../assets/images/icons/arrow-right-one.svg";
import play from "../../assets/images/icons/play-24.svg";
import movies from "../../data/movies";
import "../../styles/home.css";
import { useState } from "react";
function Home() {
  let [top, setTop] = useState(0);
  function nextMovie() {
    top < movies.length - 1 ? setTop(++top) : setTop(0);
  }
  function previousMovie() {
    top > 0 ? setTop(--top) : setTop(movies.length - 1);
  }
  return (
    <div className="home">
      <div className="head-home">
        <div
          className="section-one"
          style={{
            backgroundImage: `url(${movies[top].src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <button className="left" onClick={previousMovie}>
            <img src={arrowLeft} alt="" />
          </button>
          <div className="details">
            <img src={movies[top].src} alt="" />
            <span className="play">
              <img src={play} alt="" />
            </span>
            <div className="details-title">{movies[top].title}</div>
          </div>
          <button className="right" onClick={nextMovie}>
            <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="section-two">
          <ItemNV
            src={section21}
            rate={2}
            type="HD"
            title="Heart of Stone"
            description="An intelligence operative for a shadowy global peacekeeping agency races to"
          />
          <ItemNV
            src={section22}
            rate={2}
            type="HD"
            title="Spider-Man: Across the Spider"
            description="The continuing story of Miles Morales and the many other Spider-People from different realities."
          />
          <ItemNV
            src={section23}
            rate={2}
            type="HD"
            title="The Little Mermaid"
            description="The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find"
          />
        </div>
        <div className="section-three">Share with</div>
      </div>
      <div className="trending">
        <Title title="Trending" />
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
        <Title title="Latest Movies" />
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
        <Title title="Latest TV Shows" />
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
        <Title title="Coming Soon" />
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
        <Footer />
      </div>
    </div>
  );
}
export default Home;
