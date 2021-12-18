let number = 0;
const initialState = {
  number,
  requestFailureReason: "",
};

export const ADD_NUBER_REQUEST = "ADD_NUBER_REQUEST";
export const ADD_NUBER_SUCCESS = "ADD_NUBER_SUCCESS";
export const ADD_NUBER_FAILURE = "ADD_NUBER_FAILURE";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUBER_REQUEST: {
      return {
        ...state,
        requestFailureReason: "",
      };
    }
    case ADD_NUBER_SUCCESS: {
      console.log(number);
      return {
        ...state,
        number: ++number,
      };
    }
    case ADD_NUBER_FAILURE: {
      return {
        ...state,
        requestFailureReason: action.error,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
