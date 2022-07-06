import React from "react";
import Link from "next/link";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { MDXProvider } from "@mdx-js/react";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>확인용</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <link rel="stylesheet" href="../public/index.css" />
      </Head>
      <AppLayout>
        <MDXProvider>
          <Component {...pageProps} />
        </MDXProvider>
      </AppLayout>
    </>
  );
};
export default App;
//
