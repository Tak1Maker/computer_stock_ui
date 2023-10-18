import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import CreateComputerForm from '../../Components/Computers/CreateComputerForm'
import Navbar from '../../Components/Navbar'

export default function CreateComputerScreen() {
  return (
    <div>
      <header>
        <img alt='logo' src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
      <CreateComputerForm/>
    </div>

  )
}
