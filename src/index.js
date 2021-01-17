import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./shared components/Navbar";
import Footer from "./shared components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import "./App.css";

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Router>
          <Navbar />
          <App />
          <Footer />
        </Router>
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
