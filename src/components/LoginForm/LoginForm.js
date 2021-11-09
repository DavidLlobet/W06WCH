import { useState } from "react";

import { loginUserThunk } from "../../redux/thunks/userThunks";

const LoginForm = () => {
  const initialUser = {
    username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUser);

  const onSubmit = (event) => {
    event.preventDefault();
    debugger;
    loginUserThunk(userData);
  };

  const changeUserData = (event) => {
    setUserData({
      ...userData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        name="username"
        className="form-control"
        required
        onChange={changeUserData}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        name="password"
        className="form-control"
        required
        onChange={changeUserData}
      ></input>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
