import React, { useCallback, useState } from "react";
import Child from "./Child";
import Child2 from "./Child2";

const Parent = () => {
  const [number, setNumber] = useState(0);
  const addNumber = () => {
    console.log(number);
    setNumber((number += 1));
  };

  const addNumberC = useCallback(() => {
    console.log(number);
    setNumber((number += 1));
  }, [number]);

  return (
    <>
      <Child addNumber={addNumber} number={number} />
      <Child addNumber={addNumberC} number={number} />
    </>
  );
};

export default Parent;
