import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import "./styles.css";

class App extends React.Component {
  render() {
    return <Container />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
