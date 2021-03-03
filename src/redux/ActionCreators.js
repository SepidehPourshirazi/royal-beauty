import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const fetchFragrances = () => (dispatch) => {
  dispatch(fragrancesLoading());

  return fetch(baseUrl + "fragrances")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((fragrances) => dispatch(addFragrances(fragrances)))
    .catch((error) => dispatch(fragrancesFailed(error.message)));
};

export const fragrancesLoading = () => ({
  type: ActionTypes.FRAGRANCES_LOADING,
});

export const fragrancesFailed = (errmess) => ({
  type: ActionTypes.FRAGRANCES_FAILED,
  payload: errmess,
});

export const addFragrances = (fragrances) => ({
  type: ActionTypes.ADD_FRAGRANCES,
  payload: fragrances,
});
