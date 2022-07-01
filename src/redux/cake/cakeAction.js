import { BUY_CAKE, ADD_CAKE } from "./cakeTypes";

export function buyCake() {
  return {
    type: BUY_CAKE,
  };
}

export function addCake(number) {
  return {
    type: ADD_CAKE,
    payload: number,
  };
}
