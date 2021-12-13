const dummyUser = {
  id: 1,
  nickname: "임우찬",
};

export const initialState = {
  me: null,
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  logInErrorReason: "",
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        isLooggingIn: true,
        logInErrorReason: "",
      };
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLooggingIn: false,
        isLoggedIn: true,
        me: dummyUser,
      };
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLooggingIn: false,
        isLooggedIn: false,
        me: null,
        logInErrorReason: action.error,
      };
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLooggingIn: true,
        logInErrorReason: "",
      };
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLooggingIn: false,
        isLoggedIn: false,
        me: null,
      };
    }
    case LOG_OUT_FAILURE: {
      return {
        ...state,
        isLooggingIn: false,
        logInErrorReason: action.error,
      };
    }
  }
};

export default rootReducer;
