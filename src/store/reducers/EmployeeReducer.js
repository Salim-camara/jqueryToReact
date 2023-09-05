import { POST_EMPLOYEE } from "../actions/PostEmployee";

const initialState = {};

const EmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_EMPLOYEE:
      return action.payload;
    default:
      return state;
  }
};

export default EmployeeReducer;
