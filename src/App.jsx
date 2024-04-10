import React, { useState } from 'react'
import Evolve from './components/evolve/evolve'

const App = () => {


  const [theme,setTheme]=useState('light');
  return (
    <div className='container'>
      <Evolve theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
