import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../slices/CounterSlice";
const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="my-auto mx-auto py-2 px-2 flex gap-2">
      <button className="px-1 py-1" onClick={() => dispatch(increment())}>
        +
      </button>
      <label className="px-1 py-1">{count}</label>
      <button className="px-1 py-1" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};
export default Counter;
