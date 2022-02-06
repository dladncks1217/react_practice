import React from "react";

const Child = ({ option, changeOption }) => {
  return (
    <>
      <select onChange={changeOption} value={option}>
        <option>옵션1</option>
        <option>옵션2</option>
        <option>옵션3</option>
      </select>
    </>
  );
};
export default Child;
