import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import Autocomplete from '@mui/material/Autocomplete'
import { ComputerDto, ProcessorDto, StateDto, ComputerTypeDto } from '../Dtos'


const CreateComputerForm = () => {

  const [stateArr, setStateArr] = useState<StateDto[]>([])

  const [typeArr, setTypeArr] = useState<ComputerTypeDto[]>([])

  const [processorArr, setProcessorArr] = useState<ProcessorDto[]>([])

  const FetchFeedAllArrays = () => {
    
    axios.get('https://localhost:7107/api/computer-state').then(res => {
      console.log("state", res)
      setStateArr(res.data)
    }).catch(err => {
      console.log(err)
    })

    axios.get('https://localhost:7107/api/computer-type').then(res => {
      console.log("typeArr", res)
      setTypeArr(res.data)
    }).catch(err => {
      console.log(err)
    })

    axios.get('https://localhost:7107/api/processor').then(res => {
      console.log(res)
      setProcessorArr(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    FetchFeedAllArrays()
  }, [])


  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '45%', top: '10%', color: '#bd5457' }} className='h1'>Create a computer</Typography>
      <Formik<ComputerDto>
        initialValues={{
          id: 0,
          name: '',
          type: null,
          brand: '',
          processor: null,
          ram: 0,
          state: null,
        }}
        onSubmit={(
          values: ComputerDto,
        ) => {
          console.log(values)
          axios.post('https://localhost:7107/api/computer-stock', {
            name: values.name,
            type: values.type,
            brand: values.brand,
            processor: values.processor,
            ram: values.ram,
            state: values.state,
          })
            .then(function (response) {
              alert('A new computer as been added sucessfully ')
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            });

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
                name='name'
                sx={{ position: 'absolute', left: '43%', top: '20%',  }}
                required
                id="name"
                label="Name"
              />
              <Autocomplete
                onChange={(e, v) => {
                  values.type = v
                  console.log("type", v)
                }}
                getOptionLabel={(options) => options.type}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '20%' }}
                options={typeArr}
                renderInput={(params) => <TextField name='type' {...params} label="Type"  />}
              />
              <TextField
                onChange={handleChange}
                name='brand'
                sx={{ position: 'absolute', left: '43%', top: '30%' }}
                required
                id="brand"
                label="Brand"
              />
              <Autocomplete
                onChange={(e, v) => {
                  values.processor = v
                  console.log("processor", v)
                }}
                getOptionLabel={(options) => `${options.name} ${options.niveau} ${options.vitesse}`}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '30%' }}
                options={processorArr}
                renderInput={(params) => <TextField name='processor'{...params} label="Processor"  />}
              />
              <TextField
                onChange={handleChange}
                name='ram'
                sx={{ position: 'absolute', left: '43%', top: '40%'}}
                required
                id="ram"
                label="Ram"
              />
              <Autocomplete
                onChange={(e, v) => {
                  values.state = v
                  console.log("state", v)
                }}
                getOptionLabel={(options) => options.state}
                sx={{ width: 240, position: 'absolute', left: '58%', top: '40%' }}
                options={stateArr}
                renderInput={(params) => <TextField {...params} name='state' label="State" />}
              />

            </Box>
            <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '55.5%', top: '70%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Add</Button>
          </Form>
        }}
      </Formik>
    </div>
  )
}

export default CreateComputerForm