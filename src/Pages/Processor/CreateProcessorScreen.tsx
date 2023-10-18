import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import Navbar from '../../Components/Navbar'
import CreateProcessorForm from '../../Components/Processors/CreateProcessorForm'

export default function CreateProcessorScreen() {
  return (
    <div>
      <header >
        <img alt='logo' src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
      </div>
      <CreateProcessorForm />
    </div>

  )
}
