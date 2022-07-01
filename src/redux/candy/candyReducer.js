import { BUY_CANDY, ADD_CANDY } from "./candyTypes";
import { produce } from "immer";
import { BUY_CAKE } from "../cake/cakeTypes";
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
    case BUY_CAKE:
      return produce(state, (draft) => {
        draft.numOfCandy--;
      });
    default:
      return state;
  }
};

export default candyReducer;
