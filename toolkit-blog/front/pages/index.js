import React, { useCallback, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { join } from "../actions";
import { store } from "../store";

const Index = () => {
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

  const onSubmitJoin = useCallback(() => {
    dispatch(join(name, email, password));
  }, [name, email, password]);

  return (
    <Provider store={store}>
      <form onSubmit={onSubmitJoin}>
        <input type="text" name="name" onChange={onChangeName} />
        <input type="email" name="email" onChange={onChangeEamil} />
        <input type="email" name="password" onChange={onChangePassword} />
        <button type="submit"></button>
      </form>
    </Provider>
  );
};

export default Index;
