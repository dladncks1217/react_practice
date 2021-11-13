import React from "react";
import Head from "next/head";
import AppLayout from "../component/AppLayout";

const ReduxPractice = ({ Component }) => {
  return (
    <>
      <Head>
        <title>ReduxPractice</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <br />
        <Component />
      </AppLayout>
    </>
  );
};

export default ReduxPractice;
