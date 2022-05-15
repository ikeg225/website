import React from 'react';
//import ReactDOM from 'react-dom';
import App from './App';
import { hydrate, render } from "react-dom";
import ReactGA from "react-ga4";

ReactGA.initialize("G-WY5HW5RE3T");
ReactGA.send("pageview");

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);