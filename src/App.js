import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Reset } from "./actions";
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      count: {counter}
      <button onClick={() => dispatch(Increment())}>inc</button>
      <button onClick={() => dispatch(Decrement())}>Dec</button>
      <button onClick={() => dispatch(Reset())}>Rest</button>
    </div>
  );
}

export default App;
