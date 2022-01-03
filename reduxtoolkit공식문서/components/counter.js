import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn } from "../actions";
import { decrement, increment } from "../slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <span>{count}</span>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(logIn())}>Login</button>
    </>
  );
};

export default Counter;
