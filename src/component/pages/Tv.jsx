import Title from "../Title";
import Pagination from "../Pagination";
import Item from "../items/Item";
import movie1 from "../../assets/images/home/movie1.jpg";
import movie2 from "../../assets/images/home/movie2.jpg";
import movie3 from "../../assets/images/home/movie3.jpg";
import movie4 from "../../assets/images/home/movie4.jpg";
import movie5 from "../../assets/images/home/movie5.jpg";
import movie6 from "../../assets/images/home/movie6.jpg";
import "../../styles/tv.css";
import Footer from "../Footer";
function Tv() {
  const informations = {
    rate: 5,
    type: "HD",
    year: 2024,
  };
  return (
    <div className="tv-show">
      <Title title="Popular TV Shows" />
      <Pagination />
      <div className="list-tv-show">
        <Item title="The Mill" src={movie1} info={informations} />
        <Item
          title="Blippi's Big Dino Adventure"
          src={movie2}
          info={informations}
        />
        <Item title="The Venice Murders" src={movie3} info={informations} />
        <Item
          title="Mr. Dress-Up: The Magic of Make Believe"
          src={movie4}
          info={informations}
        />
        <Item
          title="Last Stop Larrimah: Murder Down Under"
          src={movie5}
          info={informations}
        />
        <Item title="The Mill" src={movie6} info={informations} />
      </div>
      <Pagination />
      <Footer />
    </div>
  );
}
export default Tv;
