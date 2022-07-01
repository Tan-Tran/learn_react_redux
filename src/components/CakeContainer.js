import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, addCake } from "../redux";

const CakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
      <button onClick={() => dispatch(addCake(1))}>Add cake</button>
    </div>
  );
};

export default CakeContainer;
