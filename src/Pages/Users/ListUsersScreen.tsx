import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import Navbar from '../../Components/Navbar'
import { Typography } from '@mui/material'
import ListUsers from '../../Components/Users/ListUsers'


const ListUserScreen = () => {
  return (
    <div>
      <header>
        <img alt='logo' src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
      <Typography sx={{
        fontWeight: 800,
        fontFamily: 'Gilroy,sans-serif',
        fontSize: '40px',
        position: 'absolute',
        left: '50%',
        top: '10%',
        color: '#bd5457'
      }}
        className='h1'
      >
        List of Users
      </Typography>
      <ListUsers />
    </div>
  )
}

export default ListUserScreen
