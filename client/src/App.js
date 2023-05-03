import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import Navbar from './components/Navbar'
function App() {
  const [selectedUserId, setSelectedUserId] = useState('')
  const [selectedUser, setSelectedUser] = useState({})

  //GET USER INFO
  useEffect(() => {
    if (setSelectedUserId) {
      axios
        .get(`http://localhost:8000/api/users/${selectedUserId}`)
        .then((response) =>
          setSelectedUser({
            id: response.data._id,
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            email: response.data.email,
            phone: response.data.phone,
            address: response.data.address,
          })
        )
        .catch((err) => console.error(err))
    }
  }, [selectedUserId]) //eslint-disable-line react-hooks/exhaustive-deps

  // console.log(selectedUser)
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path='/'
            element={<UserList setSelectedUserId={setSelectedUserId} />}
          />
          <Route path='/create-user' element={<CreateUser />} />
          <Route
            path='/update-user'
            element={<UpdateUser selectedUser={selectedUserId} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
