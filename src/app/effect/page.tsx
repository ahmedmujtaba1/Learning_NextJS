"use client"
import { useReducer } from "react";

function reducer(state: number, action: { type: "incremented_count" | "decremented_count" }) {
  if (action.type === "incremented_count") {
    return state + 1;
  }

  if (action.type === "decremented_count") {
    return state - 1; 
  }

  return state
}

export default function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);

  const handleCount = () => {
    dispatch({ type: "decremented_count" });
  };

  return (
    <>
      <button onClick={handleCount}>Increment Age {count}</button>
      <br />
    </>
  );
}
