import React from "react";

const Child = ({ addNumber }) => {
  //   console.log(number);
  return <button onClick={addNumber}>+1버튼</button>;
};

export default React.memo(Child);
