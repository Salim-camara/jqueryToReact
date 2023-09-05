import "./styles/Main.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-dropdown/style.css";
import Router from "./navigation/Router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import STORE from "./store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={STORE}>
          <Router></Router>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
