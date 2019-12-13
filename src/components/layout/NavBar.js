import React from "react";
import ReactDOM from "react-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <h1>Alex</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<NavBar />, rootElement);
