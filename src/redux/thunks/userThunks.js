import axios from "axios";
import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";
import { usersPaths } from "../../paths/paths";

const urlApi = "https://robots2.herokuapp.com/";

export const loginUserThunk = (user) => async (dispatch) => {
  debugger;
  const response = await axios.post(urlApi + usersPaths.login, user);
  if (response.status === 200) {
    const token = response.data.token;
    const user = jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem(
      process.env.REACT_APP_LOCAL_STORAGE,
      JSON.stringify({ token: token })
    );
  }
};
