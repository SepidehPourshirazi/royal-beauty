import { createStore, combineReducers, applyMiddleware } from "redux";
import { Fragrances } from "./fragrances";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfiguerStore = () => {
  const store = createStore(
    combineReducers({
      fragrances: Fragrances,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
