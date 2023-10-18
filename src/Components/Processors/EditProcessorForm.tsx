import React from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { ProcessorDto } from '../Dtos'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'


const EditProcessorForm = (processor: ProcessorDto) => {
 
 return (<div>
  <Formik<ProcessorDto>
   initialValues={{
    id: processor.id,
    name: processor.name,
    niveau: processor.niveau,
    vitesse: processor.vitesse
   }}
   onSubmit={(
    values: ProcessorDto,
   ) => {
    /* Ajouter method de modification d'un élément*/
    axios.post('https://localhost:7107/api/processor/update', values).then(() => alert("Computer Sucessfully modified"))
   }}
  >
   {({ values ,handleChange }) => {
    return <Form>
     <Box
      component="form"
      sx={{
       '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
     >
      <TextField
       onChange={handleChange}
       name='name'
       sx={{ position: 'absolute', top: '20%', left:'30%' }}
       required
       id="name"
       defaultValue={values.name}
       label="Name"
      />
      <TextField
       onChange={handleChange}
       name='niveau'
       sx={{ position: 'absolute', top: '50%', left:'30%' }}
       required
       id="niveau"
       defaultValue={values.niveau}
       label="Niveau"
      />
      <TextField
       onChange={handleChange}
       name='vitesse'
       sx={{ position: 'absolute', top: '35%', left:'30%'  }}
       required
       id="vitesse"
       defaultValue={values.vitesse}
       label="Vitesse"
      />

     </Box>
     <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '40%', top: '85%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Modify</Button>
    </Form>
   }}
  </Formik>
 </div>

 )
}

export default EditProcessorForm