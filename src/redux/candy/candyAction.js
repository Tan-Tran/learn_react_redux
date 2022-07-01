import { ADD_CANDY, BUY_CANDY } from "../candy/candyTypes";

export const buyCandy = () => {
  return {
    type: BUY_CANDY,
  };
};

export const addCandy = (number) => {
  return {
    type: ADD_CANDY,
    payload: number,
  };
};
