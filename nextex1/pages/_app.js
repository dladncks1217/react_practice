import Head from "next/head";
import React from "react";
import AppLayout from "../components/AppLayout";
import TopMenu from "../components/TopMenu";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>example</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <TopMenu />

      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default App;
