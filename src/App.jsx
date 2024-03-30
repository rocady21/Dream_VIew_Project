import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRouter } from './Router/AppRouter'

function App() {
  const height = window.innerHeight
  return (
    <div style={{width:"100%",height:height}}>
      <AppRouter/>
    </div>
  )
}

export default App
