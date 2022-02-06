import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [text, setText] = useState("");
  const [option, setOption] = useState("옵션1");

  const onChangeOption = useCallback(
    (e) => {
      setOption(e.target.value);
      console.log(option);
    },
    [option]
  );

  //   const onChangeText = useCallback((e) => {
  //     console.log(e.target.value);
  //     setText(e.target.value);
  //   });

  return <Child option={option} changeOption={onChangeOption} />;
};

export default Parent;
