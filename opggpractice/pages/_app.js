import React from "react";
import indexCss from "../public/index.css";

const App = ({ Component }) => {
  return (
    <>
      <head>
        <link rel="stylesheet" href={indexCss} />
        <Component />
      </head>
    </>
  );
};

export default App;
