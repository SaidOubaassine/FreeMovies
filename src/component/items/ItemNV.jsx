function ItemNV({ src, rate, type, title, description }) {
  return (
    <div className="item-section-two">
      <img src={src} alt="" />
      <div className="informations">
        <div className="rate-type">
          <span className="rate">{rate}</span>
          <span>{type}</span>
        </div>
        <div className="title-item">{title}</div>
        <div className="description-item">{description}</div>
        <button>Watch now</button>
      </div>
    </div>
  );
}
export default ItemNV;
