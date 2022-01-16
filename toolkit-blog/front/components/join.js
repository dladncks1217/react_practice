import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { join } from "../actions";

const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
  });

  const onChangeEamil = useCallback((e) => {
    setEmail(e.target.value);
  });

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  });

  const onSubmitJoin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(join({ name, email, password }));
    },
    [name, email, password]
  );

  return (
    <>
      <form onSubmit={onSubmitJoin}>
        <input type="name" name="name" onChange={onChangeName} />
        <input type="email" name="email" onChange={onChangeEamil} />
        <input type="password" name="password" onChange={onChangePassword} />
        <input type="submit" />
      </form>
    </>
  );
};

export default Join;
