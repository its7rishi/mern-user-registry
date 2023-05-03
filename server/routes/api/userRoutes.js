const express = require('express')
const router = express.Router()

//LOAD MODEL
const User = require('../../models/userModel')

//TEST
router.get('/test', (req, res) => res.send('user route   testing!'))

//? GET ALL USERS
router.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) =>
      res.status(404).json({ nousers: 'No Users Found!', msg: err.message })
    )
})

//?GET SINGLE USER
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(404).json({ error: 'User Not found' }))
})

//? CREATE USER
router.post('/', async (req, res) => {
  await User.create(req.body)
    .then((user) => res.json({ msg: 'User created successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to add user' }))
})

//? UPDATE USER
router.put('/:id', async (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => res.json({ msg: 'User updated successfully' }))
    .catch((err) => res.status(400).json({ error: 'Unable to update user' }))
})

//?DELETE USER
router.delete('/:id', async (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then((user) => res.json({ msg: 'User has been deleted' }))
    .catch((err) =>
      res.status(400).json({ error: `No user found with id: ${req.params.id}` })
    )
})
module.exports = router
