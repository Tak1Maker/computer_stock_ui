import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import { UserDto } from '../Dtos'


const CreateUserForm = () => {
 return (
  <div>
   <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '50%', top: '10%', color: '#bd5457' }} className='h1'>Create a User</Typography>
   <Formik<UserDto>
    initialValues={{
     id: 0,
     name: '',
    }}
    onSubmit={(
     values: UserDto,
     { setSubmitting }: FormikHelpers<UserDto>
    ) => {
     console.log(values)
     axios.post('https://localhost:7107/api/user', {
      name: values.name,
     })
      .then(function (response) {
       alert('A new user as been added sucessfully ')
       setSubmitting(true)
       console.log(response)
      })
      .catch(function (error) {
       console.log(error)
      });

    }}
   >
    {({ handleChange }) => {
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
        sx={{ position: 'absolute', left: '52%', top: '20%' }}
        required
        id="name"
        label="Name"
       />
      </Box>
      <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '55.5%', top: '30%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Add</Button>
     </Form>
    }}
   </Formik>
  </div>
 )
}

export default CreateUserForm