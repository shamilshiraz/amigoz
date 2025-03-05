import React, { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Nav from './components/Nav'
import './App.css'
import Hero from './components/Hero'
import Page from './components/Sc'
import Intro from './components/Intro'
import SVGUnmaskingEffect from './components/Svg'
import VideoGrid from './components/Video'
import Stack from './components/Stack'
import Example from './components/Horizontal'
import Mos from './components/Mos'
import Footer from './components/Footer'
import LargeClientScroller from './components/Clients'
import BulgeTextEffect from './components/Bg'
import Exmmple from './components/Hero'
import TextSkewAnimation from './components/Try'
import TextEx from './components/Try'
import Scene from './components/Scene'

function App() {
  // Set up Lenis on component mount
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    

    // Bind lenis to requestAnimationFrame
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    // Make lenis available globally for other components
    window.lenis = lenis

    return () => {
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return (
    <div>
      <Nav/>
      <Scene/>
      {/* <TextEx/> */}
      <Exmmple/>
      {/* <BulgeTextEffect/> */}
      {/* <Page/> */}
      <VideoGrid/>
      {/* <SVGUnmaskingEffect/> */}
      <Intro/>
      <Stack/>
      <Example/>
      <LargeClientScroller/>
      <Mos/>
    </div>
  )
}

export default App