import Robot from "../Robot/Robot";

const UpdateForm = () => {
  const handlerSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="form"
      autoComplete="off"
      noValidate
      onSubmit={handlerSubmit}
    >
      <p>Name:</p>
      <input
        type="text"
        className="form__control"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <p>Image url:</p>
      <input
        type="text"
        className="form__control"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <p>Speed:</p>
      <input
        type="text"
        className="form__control"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <p>Stamina:</p>
      <input
        type="text"
        className="form__control"
        placeholder="Write here"
        onChange={() => {}}
        required
      ></input>
      <p>Creation date:</p>
      <input
        type="text"
        className="form__control"
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
