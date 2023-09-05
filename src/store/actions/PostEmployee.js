export const POST_EMPLOYEE = "POST_EMPLOYEE";
const PostEmployee = (data) => {
  return async (dispatch) => {
    try {
      let allEmployees = [];
      if (localStorage.getItem("allEmployees")) {
        allEmployees = JSON.parse(localStorage.getItem("allEmployees"));
      }
      allEmployees.push(data);
      localStorage.setItem("allEmployees", JSON.stringify(allEmployees));
      dispatch({ type: POST_EMPLOYEE, payload: allEmployees });
    } catch (error) {
      console.log("PostEmployee => ", error);
    }
  };
};

export default PostEmployee;
