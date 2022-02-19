import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";

const App = ({ Components }) => {
  return (
    <>
      <Head>
        <title>TFT Match</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout />
    </>
  );
};

export default App;
