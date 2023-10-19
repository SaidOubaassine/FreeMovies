import filter from "../assets/images/icons/filter-solid.svg";
function Title({ title }) {
  return (
    <div className="title">
      <div className="rectangle"></div>
      <span>{title}</span>
    </div>
  );
}
export default Title;
