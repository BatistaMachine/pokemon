import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/layout/NavBar.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
