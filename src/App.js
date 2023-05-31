import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Counter: {counter} </h1>
      <button onClick={ () => dispatch(increment())}>+</button>
      <button onClick={ () => dispatch(decrement())}>-</button>
      {isLogged? <h3>Logged in</h3> : ""}
    </div>
  );
}

export default App;
