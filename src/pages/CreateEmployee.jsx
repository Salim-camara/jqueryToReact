import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import DatePicker from "react-datepicker";
import Dropdown from "react-dropdown";

const CreateEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("");
  const [cityState, setCityState] = useState();
  const [zip, setZip] = useState();

  const stateOptions = ["one", "two", "three"];
  const stateDefaultOption = stateOptions[0];
  const departmentOptions = ["one", "two", "three"];
  const departmentDefaultOption = stateOptions[0];

  const navigate = useNavigate();

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <div
          onClick={() => navigate("/employeelist")}
          style={{ cursor: "pointer" }}
        >
          <p>View Current Employees</p>
        </div>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <Input
            title={"First Name"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            title={"Last Name"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label for="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={birthDate}
            onChange={(date) => setBirthDate(date)}
          />
          <label for="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <fieldset className="address">
            <legend>Address</legend>
            <Input
              title={"Street"}
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              title={"City"}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label for="state">State</label>
            <Dropdown
              options={stateOptions}
              onChange={(e) => setCityState(e.data)}
              value={stateDefaultOption}
              placeholder="Select an option"
            />
            <Input
              title={"Zip"}
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              type={"number"}
            />
          </fieldset>

          <label for="department">Department</label>
          <Dropdown
            options={departmentOptions}
            onChange={(e) => setDepartment(e.data)}
            value={departmentDefaultOption}
            placeholder="Select an option"
          />
        </form>
        <button onclick="saveEmployee()" style={{ marginTop: 20 }}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateEmployee;
