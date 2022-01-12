export const initialState = {
  user: null,
  isLoggingIn: false,
  isLoggedIn: false,
  logInErrorReason: "",
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        user: action.data,
        isLoggedIn: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        logInErrorReason: action.error,
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
