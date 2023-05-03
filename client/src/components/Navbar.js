import * as React from 'react'
import { AppBar, Toolbar, Link, Box, Typography } from '@mui/material'
import { Link as AddLink } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <AddLink to='/' style={{ textDecoration: 'none', color: '#fff' }}>
              USER REGISTRY
            </AddLink>
          </Typography>
          <Link
            component='button'
            color='inherit'
            variant='body2'
            sx={{
              textDecoration: 'none',
            }}
          >
            <AddLink
              to='/create-user'
              style={{
                textDecoration: 'none',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              <AddIcon /> ADD USER
            </AddLink>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
