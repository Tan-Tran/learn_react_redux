import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from "./userTypes";

import { produce } from "immer";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case FETCH_USER_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.users = action.payload;
        draft.error = "";
      });
    case FETCH_USER_ERROR:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.users = [];
        draft.error = action.payload;
      });
    default:
      return state;
  }
};

export default userReducer;
