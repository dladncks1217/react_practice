import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import indexCss from "../public/index.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href={indexCss} />
        <AppLayout>
          <Component />
        </AppLayout>
      </Head>
    </>
  );
};

export default App;
