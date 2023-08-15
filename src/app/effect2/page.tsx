"use client";
import { useState, useContext } from "react";
import { Panel } from "./panel";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <>
    {show && <Panel /> }
    <br />
    <button onClick={() => setShow(true)}>Show</button>  
    </>
  );
}
