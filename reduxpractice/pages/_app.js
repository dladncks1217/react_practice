import React from "react";
import Head from "next/head";

const ReduxPractice = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Nodebird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>

      <div>asdf</div>
      <Component />
    </>
  );
};

export default ReduxPractice;
