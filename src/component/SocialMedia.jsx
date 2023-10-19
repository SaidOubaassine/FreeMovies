import Media from "../component/Media";
import facebbok from "../assets/images/icons/facebook.svg";
import telegram from "../assets/images/icons/telegram.svg";
import whatsapp from "../assets/images/icons/whatsapp-icon.svg";
import x from "../assets/images/icons/x.svg";
import messanger from "../assets/images/icons/messanger.svg";
import reddit from "../assets/images/icons/reddit-icon.svg";
function SocialMedia() {
  return (
    <div className="socialmedia">
      <div className="follewers">
        <span>20.7K</span>
        <div>Shares</div>
      </div>
      <Media logo={facebbok} number="3k" color="#4167b2" />
      <Media logo={x} number="5.5k" color="#000000" />
      <Media logo={whatsapp} number="5.9k" color="#26d367" />
      <Media logo={messanger} number="4.4k" color="#438afe" />
      <Media logo={reddit} number="638" color="#ff4500" />
      <Media logo={telegram} number="" color="#0088cc" />
    </div>
  );
}
export default SocialMedia;
