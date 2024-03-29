import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import DatePicker from "react-datepicker";
import Dropdown from "react-dropdown";
import PostEmployee from "../store/actions/PostEmployee";
import Modal from "react-simple-modal-package";

const CreateEmployee = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalErrorVisible, setModalErrorVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [department, setDepartment] = useState("department1");
  const [cityState, setCityState] = useState("state1");
  const [zip, setZip] = useState();

  const stateOptions = ["state1", "state2", "state3"];
  const stateDefaultOption = stateOptions[0];
  const departmentOptions = ["department1", "department2", "department3"];
  const departmentDefaultOption = departmentOptions[0];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    if (
      !firstName ||
      !lastName ||
      !birthDate ||
      !startDate ||
      !street ||
      !city ||
      !department ||
      !cityState ||
      !zip
    ) {
      setModalErrorVisible(true);
      return;
    }

    const data = {
      id: Date.now(),
      firstName,
      lastName,
      birthDate: birthDate.toString(),
      startDate: startDate.toString(),
      street,
      city,
      department,
      cityState,
      zip,
    };

    const tmp = JSON.parse(localStorage.getItem("allEmployees")) || 0;
    dispatch(PostEmployee(data));
    if (tmp.length < JSON.parse(localStorage.getItem("allEmployees")).length) {
      setModalVisible(true);
    }
  };

  return (
    <div>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <p>Employee created !</p>
      </Modal>
      <Modal
        visible={modalErrorVisible}
        setVisible={setModalErrorVisible}
        modalStyle={{ backgroundColor: "#d91633" }}
      >
        <p style={{ color: "white" }}>Please enter all fields !</p>
      </Modal>
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
              onChange={(e) => setCityState(e.value)}
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
            onChange={(e) => setDepartment(e.value)}
            value={departmentDefaultOption}
            placeholder="Select an option"
          />
        </form>
        <button onClick={handleSubmit} style={{ marginTop: 20 }}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateEmployee;
