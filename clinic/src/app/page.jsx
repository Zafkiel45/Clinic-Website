'use client'
import { useEffect } from "react";
import { Headers } from "./components/header"
import { Mains } from "./components/main"
import { Footers } from "./components/footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; 


export default function Home() {
  useEffect(() => {AOS.init()}, [])
  return (
    <>
      <Headers/>
      <Mains/>
      <Footers/>
    </>
  )
}
