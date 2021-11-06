const Robot = () => {
  return (
    <article className="robot">
      <h2>Name</h2>
      <img className="robot__image" alt=""></img>
      <h3>Features</h3>
      <div className="robot__features">
        <p className="robot__features-name">Speed</p>
        <p className="robot__features-name">Stamina</p>
        <p className="robot__features-name">creationDate</p>
      </div>
      <button className="button">UPDATE</button>
      <button className="button">DELETE</button>
    </article>
  );
};

export default Robot;
