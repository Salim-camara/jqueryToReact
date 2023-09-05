import { combineReducers } from "redux";
import EmployeeReducer from "./EmployeeReducer";

const RootReducer = combineReducers({
  // reducers
  EmployeeReducer,
});

export default RootReducer;
