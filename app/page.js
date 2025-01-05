"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Services from "@/components/Services";
import { useEffect, useState } from "react";


export default function Home() {

  const [isdarkMode, setIsDarkMode] = useState(false)

  useEffect(()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches )) {
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isdarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = ''
    }
  },[isdarkMode])

  return (
   <>
   <Navbar isdarkMode={isdarkMode} setIsDarkMode={setIsDarkMode} />
   <Header isdarkMode={isdarkMode} />
   <About isdarkMode={isdarkMode} />
   <Services isdarkMode={isdarkMode} />
   <Project isdarkMode={isdarkMode} />
   <Contact isdarkMode={isdarkMode} />
   <Footer isdarkMode={isdarkMode} />
   </>
  );
}
