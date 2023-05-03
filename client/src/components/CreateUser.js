import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'

const yupValidationSchema = yup.object().shape({
  firstname: yup
    .string()
    .min(3, 'Firstname should be at least 3 characters long')
    .required('Required'),
  lastname: yup
    .string()
    .min(3, 'Last name must be at least 3 characters long')
    .required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email id')
    .required('Required'),
  phone: yup
    .string()
    .min(8, 'Phone number should be at least 8 characters long')
    .required('Required'),
  address: yup
    .string()
    .min(10, 'Address should be at least 10 characters')
    .required('Required'),
})

const CreateUser = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
    },
    validationSchema: yupValidationSchema,
    onSubmit: async (values) => {
      const response = await axios
        .post('http://localhost:8000/api/users', values)
        .catch((err) => console.log(err))
      formik.resetForm()
      navigate('/')
    },
  })
  return (
    <div align='center'>
      <Typography variant='h3' color='primary' align='center' mb={4}>
        Add User
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        autoComplete='off'
        style={{
          width: '600px',
          padding: '15px',
          borderRadius: '0-75rem',
          boxShadow: '0 10px 10px rgba(0,0,0,0.5)',
        }}
      >
        <Stack
          spacing={2}
          direction='row'
          align='center'
          sx={{ marginBottom: 4 }}
        >
          <TextField
            type='text'
            variant='outlined'
            id='firstname'
            label='First Name'
            value={formik.values.firstname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={formik.touched.firstname && Boolean(formik.errors.firstname)}
            helperText={formik.touched.firstname && formik.errors.firstname}
          />

          <TextField
            type='text'
            variant='outlined'
            color='primary'
            id='lastname'
            label='Last Name'
            value={formik.values.lastname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={formik.touched.lastname && Boolean(formik.errors.lastname)}
            helperText={formik.touched.lastname && formik.errors.lastname}
          />
        </Stack>
        <Stack
          spacing={2}
          direction='row'
          align='center'
          sx={{ marginBottom: 4 }}
        >
          <TextField
            type='text'
            variant='outlined'
            color='primary'
            id='email'
            label='Email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            type='text'
            variant='outlined'
            color='primary'
            id='phone'
            label='Phone'
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            fullWidth
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </Stack>
        <TextField
          type='text'
          variant='outlined'
          color='primary'
          id='address'
          label='Address'
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          fullWidth
          sx={{ mb: 4 }}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <Button
          disabled={formik.isSubmitting}
          type='submit'
          variant='contained'
          fullWidth
        >
          {formik.isSubmitting ? 'Adding...' : 'Add'}
        </Button>
      </form>
    </div>
  )
}

export default CreateUser
