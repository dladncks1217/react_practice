import { Button } from "antd";
import Head from "next/head";
import React, { useCallback, useState } from "react";

const Index = () => {
  const [number, setNumber] = useState(0);

  const setNumberChange = useCallback(() => {
    setNumber((number = number + 1));
    console.log(number);
  }, []);

  return (
    <>
      <Head>
        <title>Nodebird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <Button onClick={setNumberChange}>asdf</Button>
    </>
  );
};

export default Index;
