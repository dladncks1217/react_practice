import React, { useCallback, useState } from "react";

const Index = () => {
  const date = new Date();
  const [clicked, onChangeClicked] = useState(0);
  const [id, onChangeId] = useState("");
  const [password, onChangePassword] = useState("");
  const [loggedIn, onChangeLoggedIn] = useState(false);

  const onClickButton = () => {
    onChangeClicked(++clicked);
    console.log(
      `${id}님이 버튼을 ${clicked}번째 눌렀습니다. 시간:${date.getHours()}시${date.getMinutes()}분${date.getSeconds()}초`
    );
  };

  const handleId = useCallback((e) => {
    onChangeId(e.target.value);
  });

  const handlePassword = useCallback((e) => {
    onChangePassword(e.target.value);
  });

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onChangeLoggedIn(true);
      console.log(
        `${id}님이 로그인했습니다. 시간:${date.getHours()}시${date.getMinutes()}분${date.getSeconds()}초`
      );
    },
    [id, password]
  );
  return (
    <>
      {loggedIn ? (
        <button id="countbtn" onClick={onClickButton}>
          클릭
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" id="id" onChange={handleId} />
          <input type="password" id="password" onChange={handlePassword} />
          <button id="submit" type="submit">
            로그인
          </button>
        </form>
      )}
    </>
  );
};

export default Index;
