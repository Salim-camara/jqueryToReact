import { useRoutes } from "react-router-dom";
import CreateEmployee from "../pages/CreateEmployee";
import EmployeeList from "../pages/EmployeeList";

const Router = () => {
  const routes = useRoutes([
    { path: "*", element: <CreateEmployee /> },
    { path: "/employeelist", element: <EmployeeList /> },
  ]);
  return routes;
};

export default Router;
