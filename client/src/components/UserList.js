import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import { Link } from 'react-router-dom'

const UserList = ({ setSelectedUserId }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getData() {
      axios
        .get('http://localhost:8000/api/users')
        .then((response) => setUsers(response.data))
        .catch((error) => console.error(error))
    }

    getData()
  }, []) //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <TableContainer sx={{ p: '20px' }}>
      <Table align='center' sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead sx={{ borderBottom: '2px solid #1976d2' }}>
          <TableRow>
            <TableCell align='center'>Firstname</TableCell>
            <TableCell align='center'>Lastname</TableCell>
            <TableCell align='center'>Email</TableCell>
            <TableCell align='center'>Phone</TableCell>
            <TableCell align='center'>Address</TableCell>
            <TableCell align='center'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='left'>{user.firstname}</TableCell>
              <TableCell align='left'>{user.lastname}</TableCell>
              <TableCell align='left'>{user.email}</TableCell>
              <TableCell align='left'>{user.phone}</TableCell>
              <TableCell align='left'>{user.address}</TableCell>
              <TableCell align='center'>
                <Link
                  to='/update-user/'
                  onClick={() => setSelectedUserId(user._id)}
                >
                  <EditIcon color='primary' cursor='pointer' />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default UserList
