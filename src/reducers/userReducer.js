const defaultState = {
  user: null,
  userId: null,
  isActive: null,
  bgCounter: -1
};
const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_NULL":
      return {
        ...state,
        isActive: null
      };
    case "SET_FALSE":
      return {
        ...state,
        isActive: false
      };
    case "SET_TRUE":
      return {
        ...state,
        isActive: true
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        userId: action.payload.id
      };
    case "INCREMENT_COUNTER":
      return { ...state, bgCounter: state.bgCounter + 1 };
    default:
      return state;
  }
};

export default userReducer;
