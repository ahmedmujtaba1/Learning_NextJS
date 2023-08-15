"use client";
import { useState } from "react";
import Button from "@/components/ui/button1";

export default function MyApp() {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <Button setCount={setCount} count={count} name="Subscribe" />
      <br />
      <Button setCount={setCount} count={count} name="Bell Icon" />
      
    </>
  );
}
