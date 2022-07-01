import { BUY_CANDY, ADD_CANDY } from "./candyTypes";
import { produce } from "immer";
const initialState = {
  numOfCandy: 20,
};

const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CANDY:
      return produce(state, (draft) => {
        draft.numOfCandy--;
      });
    case ADD_CANDY:
      return produce(state, (draft) => {
        draft.numOfCandy += action.payload;
      });
    default:
      return state;
  }
};

export default candyReducer;
