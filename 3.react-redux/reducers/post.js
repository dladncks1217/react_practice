const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const postReducer = (prevState = initialState, action) => {
  // 새로운 state 만들어주기
  switch (action.type) {
    case "ADD_POST":
      return [...prevState, action.data];
    default:
      return prevState;
  }
};

const postSlice = createSlice({
  name: "post",
});

module.exports = postReducer;
