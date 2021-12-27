const { createSlice } = require("@reduxjs/toolkit");
const { addPost } = require("../actions/post");

const initialState = {
  data: [],
};

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
  initialState,
  // 동기적, 내부적인 액션들
  reducers: {},
  // 비동기적, 외부적인 액션들
  extraReducers: {
    [addPost.pending](state, action) {},
    [addPost.fulfilled](state, action) {},
    [addPost.rejected](state, action) {},
  },
});

module.exports = postReducer;
