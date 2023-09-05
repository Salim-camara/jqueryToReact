import "./styles/Main.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import Router from "./navigation/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
