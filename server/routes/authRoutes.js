const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile, updatePicCollection} = require('../controllers/authController')

// middleware
// router.use(
//   cors({
//     credentials: true,
//     origin: 'https://pixiartsimple.netlify.app'
//   })
//   )

router.get('/', test);
router.post('/register', registerUser)
router.post('/login', loginUser) 
router.post('/updatePic', updatePicCollection)
router.post('/profile', getProfile)

module.exports = router;