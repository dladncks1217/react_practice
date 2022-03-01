import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logIn, textToolkit } from "../actions";
import { decrement, increment } from "../slice/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  });
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
      <br />
      <br />
      <br />
      <input type="text" onChange={onChangeText} value={text} />
      &nbsp;&nbsp;
      <button onClick={() => dispatch(textToolkit({ text, hi: "hello!" }))}>
        start pending
      </button>
    </>
  );
};

export default Counter;
