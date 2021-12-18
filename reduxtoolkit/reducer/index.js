const initialState = {
  number: 0,
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
      return {
        ...state,
        number: number + 1,
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
