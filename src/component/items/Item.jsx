function Item({title, src, rate, type, year }) {
  return (
    <div className="item-movie">
      <img src={src} alt="" />
      <div className="info">
        <span style={{ color: "#08AB4B", fontSize: 14 }}>&#9733;</span>
        <span>{rate}</span>
        <span>{type}</span>
        <span>{year}</span>
      </div>
      <div className="title">{title}</div>
      <button>Watch now</button>
    </div>
  );
}
export default Item;
