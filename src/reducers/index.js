import { combineReducers } from "redux";
import authUser from "../reducers/authUser";
import users from "../reducers/users";

export default combineReducers({
  authUser,
  users,
});