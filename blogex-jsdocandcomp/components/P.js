import React, { useCallback, useState } from "react";
import Child from "./C";

const Parent = () => {
  const [text, setText] = useState("자식으로갑니다.");

  const onChangeText = useCallback((e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  });

  return (
    <>
      <input onChange={onChangeText} value={text} />
      <Child data={text} />
    </>
  );
};

export default Parent;
