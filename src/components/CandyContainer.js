import React from "react";
import { connect } from "react-redux";
import { buyCandy, addCandy } from "../redux";

const CandyContainer = (props) => {
  return (
    <div>
      <h2>Number of candy - {props.numOfCandy}</h2>
      <button onClick={props.buyCandy}>Buy candy</button>
      <button onClick={() => props.addCandy(1)}>Add cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCandy: state.candy.numOfCandy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCandy: (number) => dispatch(addCandy(number)),
    buyCandy: () => dispatch(buyCandy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer);
