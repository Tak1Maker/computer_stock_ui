import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import ListComputer from '../../Components/Computers/ListComputer'
import Navbar from '../../Components/Navbar'
import { Typography } from '@mui/material'
import '../../css/Details.css'


const ListComputerScreen = () => {
  return (
    <div>
      <header>
        <img alt='logo' src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
        <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '45%', top: '10%', color: '#bd5457' }} className='h1'>List of Computers</Typography>
        <ListComputer />
      </div>

    </div>
  )
}

export default ListComputerScreen
