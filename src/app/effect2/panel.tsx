"use client";
import { useState, useEffect } from "react";

export const Panel = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    if (true) {
      setCount(count + 1);
    }
    return () => {
        console.log("Unmount")
    }
  }, []);

  return <>UseEffect</>;
};
