import React from "react";
import { buyCake, addCake, buyCandy, addCandy } from "../redux";
import { connect } from "react-redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Items - {props.numOfItems}</h2>
      <button onClick={props.buyItem}>Buy item</button>
      <button onClick={() => props.addItem()}>Add item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const numOfItems = ownProps.cake
    ? state.cake.numOfCakes
    : state.candy.numOfCandy;
  return { numOfItems };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const buyItem = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyCandy());
  const addItem = ownProps.cake
    ? (num = 1) => dispatch(addCake(num))
    : (num = 1) => dispatch(addCandy(num));
  return { buyItem, addItem };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
