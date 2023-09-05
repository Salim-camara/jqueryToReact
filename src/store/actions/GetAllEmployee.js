export const GET_ALL_EMPLOYEE = "GET_ALL_EMPLOYEE";
const GetAllEmployee = () => {
  return async (dispatch) => {
    try {
      const allEmployees = JSON.parse(localStorage.getItem("allEmployees"));
      if (!allEmployees) {
        return;
      }
      dispatch({ type: GET_ALL_EMPLOYEE, payload: allEmployees });
    } catch (error) {
      console.error("GetAllEmployee => ", error);
    }
  };
};

export default GetAllEmployee;
