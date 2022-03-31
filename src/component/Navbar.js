import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import NavbarIcon from './NavbarIcon'

function Navbar() {
  return (
    
    <AppBar>
      <Toolbar>
        <NavbarIcon test='test'/>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar