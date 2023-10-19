function Media({ logo, number, color }) {
  const styles = {
    media: {
      backgroundColor: color,
    },
  };
  return (
    <div className="media" style={styles.media}>
      <img src={logo} alt="Logo" />
      {number !== "" && <span>{number}</span>}
    </div>
  );
}

export default Media;
