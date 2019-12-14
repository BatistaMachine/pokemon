import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import NavBar from "./components/layout/NavBar.js";
import "./App.css";
import Dashboard from "./components/layout/DashBoard.js";
import backgroundImage from "./pattern.png";

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        <NavBar />
        <div className="container">
          <Dashboard />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
