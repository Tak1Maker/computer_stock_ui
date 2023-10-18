import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Formik, FormikHelpers, Form } from 'formik'
import Autocomplete from '@mui/material/Autocomplete'
import { BorrowDto, ComputerDto, UserDto } from '../Dtos'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function BorrowForm() {

  const [userArr, setUserArr] = useState<UserDto[]>([])

  const [computersArr, setComputerArr] = useState<ComputerDto[]>([])

  const listFiltered = computersArr.filter((e) => {
    if (e.state?.state === "In Stock")
      return e
    else return null
  })

  const FetchFeedAllArrays = () => {
    axios.get('https://localhost:7107/api/user').then(res => {
      setUserArr(res.data)
      console.log("users", res)
    }).catch(err => {
      console.log(err)
    })

    axios.get('https://localhost:7107/api/computer-stock').then(res => {
      console.log("computers", res)
      setComputerArr(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    FetchFeedAllArrays()
  }, [])


  return (
    <div>
      <Typography sx={{ fontWeight: 800, fontFamily: 'Gilroy,sans-serif', fontSize: '40px', position: 'absolute', left: '50%', top: '10%', color: '#bd5457' }} className='h1'>New Borrow</Typography>
      <Formik<BorrowDto>
        initialValues={{
          id: 0,
          fromDate: new Date(),
          toDate: null,
          user: null,
          computer: null,
          comment: ''
        }}
        onSubmit={(
          values: BorrowDto,
        ) => {

          axios.post('https://localhost:7107/api/borrow', values)
            .then(function (response) {
              alert('A new borrow as been added sucessfully')
              console.log(response)
            })
            .catch(function (error) {
              console.log(error)
            });

        }}
      >
        {({ values, setFieldValue, handleChange }) => {

          return <Form>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <Autocomplete
                onChange={(e, v) => {
                  values.computer = v
                  console.log("computer", v)
                }}
                getOptionLabel={(options) => options.name}
                sx={{ width: 240, position: 'absolute', left: '51%', top: '20%' }}
                options={listFiltered}
                renderInput={(params) => <TextField name='name' {...params} label="Computers Available" />}
              />

              <Autocomplete
                onChange={(e, v) => {
                  values.user = v
                  console.log("users", v)
                }}
                getOptionLabel={(options) => options.name}
                sx={{ width: 240, position: 'absolute', left: '51%', top: '30%' }}
                options={userArr}
                renderInput={(params) => <TextField name='name' {...params} label="User" />}
              />
              <Box className="datePicker" component="div">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="From Date"
                    value={values.fromDate}
                    inputFormat="DD/MM/YYYY"
                    onChange={(e) => setFieldValue('fromDate', e ?? new Date())}
                    renderInput={(params) => <TextField {...params} />}
                    maxDate={new Date()}
                  />

                  <DatePicker
                    label="To Date"
                    value={values.toDate}
                    inputFormat="DD/MM/YYYY"
                    className='datePickerInEditForm'
                    onChange={(e) => setFieldValue('toDate', e ?? new Date())}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>

              <TextField
                onChange={handleChange}
                name='comment'
                sx={{ position: 'absolute', left: '51%', top: '50%' }}
                required
                multiline
                rows={5}
                maxRows={5}
                id="comment"
                label="Comment"
              />
            </Box>
            <Button type='submit' sx={{ backgroundColor: '#bd5457', position: 'absolute', left: '55.5%', top: '70%', ":hover": { backgroundColor: '#874143' } }} variant='contained'>Add</Button>
          </Form>
        }}
      </Formik>
    </div>
  )
}
