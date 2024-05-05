
const initData = {
    data: [],
    isPending: false,
    error: ""
  };
  
  export const onFetch = (state = initData, action = {}) => {
    switch (action.type) {
      case "REQUEST_PENDING":
        return { ...state, isPending: true };
      case "REQUEST_FAILED":
        return { ...state, error: action.payload, isPending: false };
      case "REQUEST_SUCCESS":
        return {
          ...state,
          data: [...state.data, ...action.payload], // assuming payload is an array or single object
          isPending: false
        };
      default:
        return state;
    }
  };
  