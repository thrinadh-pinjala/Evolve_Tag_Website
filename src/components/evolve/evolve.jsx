import React from 'react'
import './evolve.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'





const evolve = ({theme,setTheme}) => {


    const toggle_mode=()=>{
        theme=='light' ? setTheme('dark'):setTheme('light')
    }

  return (
    <div className='evolve'>

        <img src={theme == 'light ' ? search_icon_light:search_icon_dark } />
      <h1>EVOLVE</h1>
    
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='search-box' >
        <input type="text" placeholder='Search'/>
        <img src={search_icon_light} alt=""/>

      </div>

       
      <ul>
        <li>Home</li>
        <li>Members</li>
        <li>Login</li>
        <li>Publications</li>
      </ul>

      <img onClick={()=>{toggle_mode()}} src ={theme == 'light' ? toogle_light : toggle_dark} alt ="" className='toggle-icon'/>
    </div>
  )
}

export default evolve
