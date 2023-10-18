import React from 'react'
import { Formik, FormikHelpers, Form } from 'formik'
import { StateDto } from '../Dtos'
import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'


const EditComputerStateForm = (state: StateDto) => {
 return (<div>
  <Formik<StateDto>
   initialValues={{
    id: state.id,
    state: state.state
   }}
   onSubmit={(
    values: StateDto,
    { setSubmitting }: FormikHelpers<StateDto>
   ) => {
    /* Ajouter method de modification d'un élément*/
    axios.post('https://localhost:7107/api/computer-state/update', values).then(()=> alert("Computer Sucessfully modified"))
   }}
  >
   {({ values, handleChange }) => {
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
       name='state'
       sx={{ position: 'absolute', top: '30%', left: '30%' }}
       required
       defaultValue={values.state}
       id="state"
       label="State"
      />

     </Box>
     <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '40%', top: '85%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Edit</Button>
    </Form>
   }}
  </Formik>
 </div>

 )
}

export default EditComputerStateForm