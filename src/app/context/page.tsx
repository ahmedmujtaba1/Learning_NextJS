"use client"
import { createContext, useContext } from 'react';
import { CountContext, ThemeContext } from '../layout';

export default function Home() {
    // const count = useContext(CountContext)
    const theme2 = useContext(ThemeContext)
  return (
    <>
      <br />Theme : {theme2}
    </>
  )
}

