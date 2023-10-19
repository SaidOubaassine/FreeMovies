import arrow from "../assets/images/icons/arrow-right.svg";
function Button({ title, width }) {
  return (
    <div className="buttonSite">
      <button style={{ width: width }}>
        {title} <img src={arrow} alt="arrow right" />
      </button>
    </div>
  );
}
export default Button;
