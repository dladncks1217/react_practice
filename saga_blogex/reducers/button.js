export const initialState = {
  buttonClicked: "false",
  buttonClicking: "true",
  buttonFailureReason: "",
};

export const BUTTON_CLICKED = "BUTTON_CLICKED";
export const BUTTON_SUCCESS = "BUTTON_SUCCESS";
export const BUTTON_FAILURE = "BUTTON_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUTTON_CLICKED: {
      return {
        ...state,
        buttonClicking: true,
      };
    }
    case BUTTON_SUCCESS: {
      return {
        ...state,
        buttonClicking: false,
        buttonClicked: true,
      };
    }
    case BUTTON_FAILURE: {
      return {
        ...state,
        buttonClicking: false,
        buttonFailureReason: "어쩌다보니클릭불가",
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
