import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import Navbar from '../../Components/Navbar'
import CreateUserForm from '../../Components/Users/CreateUserForm'

export default function CreateUserScreen() {
  return (
    <div>
      <header>
        <img  alt='logo' src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
        <CreateUserForm /> 
      </div>
    </div>

  )
}
