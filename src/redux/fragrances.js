import * as ActionTypes from "./ActionTypes";

export const Fragrances = (
  state = { isLoading: true, errMess: null, fragrances: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_FRAGRANCES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        fragrances: action.payload,
      };
    case ActionTypes.FRAGRANCES_LOADING:
      return { ...state, isLoading: true, errMess: null, fragrances: [] };

    case ActionTypes.FRAGRANCES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
