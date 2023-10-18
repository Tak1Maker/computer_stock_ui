import React from 'react'
import AccordionMenu from '../../Components/Accordion'
import CreateBorrowForm from '../../Components/Borrow/CreateBorrowForm'
import Navbar from '../../Components/Navbar'

export default function CreateBorrowScreen() {
  return (
    <div>
      <header >
        <img alt='logo' src={require('../../imgs/logo.png')} />
        <Navbar />
      </header>
      <div id='accordion'>
        <AccordionMenu />
        <CreateBorrowForm />
      </div>
    </div>

  )
}
