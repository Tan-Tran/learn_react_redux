import { createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

import cakeReducer from "./cake/cakeReducer";
import candyReducer from "./candy/candyReducer";
import userReducer from "./user/userReducer";

import { applyMiddleware } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  candy: candyReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
