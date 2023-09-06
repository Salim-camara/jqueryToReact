import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import GetAllEmployee from "../store/actions/GetAllEmployee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allEmployees = useSelector((state) => state.EmployeeReducer);

  useEffect(() => {
    dispatch(GetAllEmployee());
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "birthDate", headerName: "Birth Date", width: 130 },
    { field: "startDate", headerName: "Start Date", width: 130 },
    { field: "street", headerName: "Street", width: 130 },
    { field: "city", headerName: "City", width: 130 },
    { field: "department", headerName: "Department", width: 130 },
    { field: "cityState", headerName: "State", width: 130 },
    { field: "zip", headerName: "Zip", width: 130 },
  ];

  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <DataGrid
          rows={allEmployees}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
