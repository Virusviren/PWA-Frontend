import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./shared components/Navbar";
import Footer from "./shared components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import firebase from "firebase";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: process.env.REACT_APP_APPID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <Router>
            <Navbar />
            <App />
            <Footer />
          </Router>
        </BaseProvider>
      </StyletronProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.unregister();
