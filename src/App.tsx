import React from "react";
import ReactDOM from "react-dom";
import { ContentBlurb } from "./ContentBlurb";
import { ContentContextProvider } from "./ContentContext";

import "./index.css";
import { LanguageSelector } from "./LanguageSelector";

const App = () => (
  <div className="container">
    <ContentContextProvider>
      <LanguageSelector /> 
      <ContentBlurb />
    </ContentContextProvider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
