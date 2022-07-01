import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";
import { produce } from "immer";
const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return produce(state, (draft) => {
        draft.numOfCakes--;
      });
    case ADD_CAKE:
      return produce(state, (draft) => {
        draft.numOfCakes += action.payload;
      });
    default:
      return state;
  }
};

export default cakeReducer;
