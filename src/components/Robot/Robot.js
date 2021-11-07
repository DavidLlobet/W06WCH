const Robot = ({
  name,
  _id,
  image,
  speed,
  stamina,
  creationDate,
  onDeleteClick,
}) => {
  return (
    <article className="card shadow-sm">
      <h2 className="fw-light text-center display-5">{name}</h2>
      <img
        src={image}
        alt="robot"
        width="300"
        height="300"
        className="bd-placeholder-img card-img-top"
      ></img>
      <div className="card-body">
        <h3 className="card-text">Features</h3>
        <div className="robot__features">
          <p className="robot__features-name">Speed: {speed}</p>
          <p className="robot__features-name">Stamina: {stamina}</p>
          <p className="robot__features-name">creationDate: {creationDate}</p>
        </div>
      </div>
      <button className="button">UPDATE</button>
      <button className="button" onClick={() => onDeleteClick(_id)}>
        DELETE
      </button>
    </article>
  );
};

export default Robot;
