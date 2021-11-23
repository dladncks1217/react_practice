export const initialState = {
  text: "",
};

export const CLICK_BUTTON = "CLICK_BUTTON";
export const EXAMPLE_ACTION = "EXAMPLE_ACTION";

export const clickButtonAction = (data) => {
  return {
    type: CLICK_BUTTON,
    text: data,
  };
};

export const exampleAction = {
  type: EXAMPLE_ACTION,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_BUTTON: {
      return {
        ...state,
        text: action.data,
      };
    }
    case EXAMPLE_ACTION: {
      return {
        ...state,
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
