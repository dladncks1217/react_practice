const { createAsyncThunk } = require("@reduxjs/toolkit");
// const { resolve } = require("../webpack.config");

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

//action이름 넣는 이유 (user/login)
// 여기서 data부분이 로그인할라고 던져주는 데이터부분임.
const logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  // 여기에 axios요청하고 하면 됨.
  // const state = thunkAPI.getState();
  // pending, fulfilled, rejected
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: "임우찬",
  });
  return result;
});

module.exports = {
  logIn,
};
