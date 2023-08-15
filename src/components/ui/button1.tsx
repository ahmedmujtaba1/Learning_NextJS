"use client";
import { useState } from "react";

interface Ipops {
    name : string
    count : number
    setCount : (count : number) => void;
} 

const Button = ({setCount, count, name} : Ipops) => {

  return (
    <>
      <button className="bg-blue-400 rounded-sm py-4 px-8" onClick={() => setCount(count + 1)}>{name} {count} </button>
      <br />
      {/* <button onClick={decrement}>Decrement Button {count} </button> */}
    </>
  );
};

export default Button