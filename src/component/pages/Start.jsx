import Input from "../Input";
import Head from "../Head";
import Button from "../Button";
import SocialMedia from "../SocialMedia";
import Description from "../Description";
import Footer from "../Footer";
import "../../styles/start.css";
function Body() {
  return (
    <div className="start">
      <Head />
      <Input />
      <SocialMedia />
      <Button title="View Full Site" width={227} />
      <Description />
      <Button title="Go to Freemoviesfull.cc" width={330} />
      <Footer />
    </div>
  );
}
export default Body;
