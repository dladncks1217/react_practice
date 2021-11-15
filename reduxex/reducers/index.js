import { combineReducers } from "redux";

export const initialState = {
  isTrue: false,
  data: "asdf",
};

export const EXAMPLE_TRUE = "EXAMPLE_TRUE";
export const EXAMPLE_FALSE = "EXAMPLE_FALSE";

export const makeTrueAction = (data) => {
  return {
    type: EXAMPLE_TRUE,
    data,
  };
};

export const makeFalseAction = (data) => {
  return {
    type: EXAMPLE_FALSE,
    data,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_TRUE: {
      return {
        ...state,
        isTrue: true,
      };
    }
    case EXAMPLE_FALSE: {
      return {
        ...state,
        isTrue: false,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default combineReducers({ reducer });
