import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducers/index";

const initialState = {};

const middleware = [logger, thunk];
const composers = [applyMiddleware(...middleware)];

const store = createStore(
  reducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    ...composers
  )
);

export default store;
