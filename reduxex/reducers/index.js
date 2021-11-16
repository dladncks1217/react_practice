export const initialState = {
  isTrue: false,
  data: "",
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
        data: action.data,
      };
    }
    case EXAMPLE_FALSE: {
      return {
        ...state,
        isTrue: false,
        data: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
