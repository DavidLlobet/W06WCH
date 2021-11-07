const UpdateForm = () => {
  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="form_create container-sm"
      autoComplete="off"
      noValidate
      onSubmit={handlerSubmit}
    >
      <p>Name:</p>
      <input
        type="text"
        className="form-control"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <p>Image url:</p>
      <input
        type="text"
        className="form-control"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <p>Speed:</p>
      <input
        type="range"
        min="0"
        max="10"
        id="speed"
        placeholder="Speed"
        name="speed"
        className="form-range"
        onChange={() => {}}
        required
      ></input>
      <p>Stamina:</p>
      <input
        type="range"
        min="0"
        max="10"
        id="stamina"
        placeholder="Stamina"
        name="stamina"
        className="form-range"
        onChange={() => {}}
        required
      ></input>
      <p>Creation date:</p>
      <input
        type="text"
        className="form-control"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <button className="form__button" type="submit">
        UPDATE ROBOT
      </button>
    </form>
  );
};

export default UpdateForm;
