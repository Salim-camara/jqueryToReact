import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import GetAllEmployee from "../store/actions/GetAllEmployee";

const EmployeeList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tmpData = useSelector((state) => state.EmployeeReducer);
  const [allEmployees, setAllEmployees] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    dispatch(GetAllEmployee());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setAllEmployees(tmpData);
  }, []);

  useEffect(() => {
    tmpData && setAllEmployees(tmpData);
  }, [tmpData]);

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

  const requestSearch = (searchedVal) => {
    const filteredRows = tmpData.filter((row) => {
      return (
        row.firstName.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.lastName.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.birthDate.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.startDate.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.street.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.city.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.cityState.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.department.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.zip.includes(searchedVal)
      );
    });
    setAllEmployees(filteredRows);
  };

  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <div style={{ marginTop: 10, marginBottom: 10, alignItems: "center" }}>
          <p style={{ margin: 0 }}>Search</p>
          <input
            type="text"
            onChange={(searchVal) => {
              requestSearch(searchVal.target.value);
              setSearched(searchVal.target.value);
            }}
            value={searched}
          />
        </div>
        <DataGrid
          rows={allEmployees && allEmployees}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <p>Home</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
