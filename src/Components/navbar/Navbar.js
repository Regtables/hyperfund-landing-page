import React, { useState } from 'react'

import { HiOutlineMenu, HiX } from 'react-icons/hi'

import './navbar.css'

const Links = () => {
 return ( 
    <>
      <a href = '#home'><p>Home</p></a>
      <a href = '#benefits'><p>Benefits</p></a>
      <a href = '#schedule'><p>Schedule</p></a>
      <a href = '#speakers'><p>Speakers</p></a>
    </>
)
}

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className = 'hyperfund__navbar' role = 'navigation'>
        <div className = 'hyperfund__navbar-hamburger'>
            {toggleMenu
                ? <HiX size = {32} onClick = {()=> setToggleMenu(false)} />
                : <HiOutlineMenu size = {32} onClick = {()=> setToggleMenu (true)} />
            }
            {toggleMenu && (
                <div className = 'hyperfund__navbar-hamburger_container'>
                    <div className = 'hyperfund__navbar-hamburger_container-links scale-up-hor-right'>
                        <Links />
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar
