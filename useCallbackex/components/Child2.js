import React from "react";

const Child2 = ({ addNumber }) => {
  //   console.log(number);
  return <button onClick={addNumber}>+1버튼</button>;
};

export default React.memo(Child2);
