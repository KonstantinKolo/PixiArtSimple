const User = require('../models/user')
const { hashPassword, comparePasswords } = require('../helpers/auth')
const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const test = (req, res) => {
  res.json('test is working');
} 


//Register end point
const registerUser = async (req, res) => {
  try{
    const {name, email, password,picCollection, profilePicture} = req.body;
    // Check if name was entered
    if(!name){
      return res.json({
        error: 'name is required'
      })
    }
    // Check if password is good
    if(!password || password.lenght < 6){
      return res.json({
        error: 'Password is required and should be at least 6 characters long'
      })
    }
    // Check email
    const exist = await User.findOne({email:email});
    if(exist) {
      return res.json({
        error: 'Email is taken already'
      })
    }

    const hashedPassword = await hashPassword(password)
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      picCollection:[],
      profilePicture: profilePicture,
    })

    return res.json(user)
  }
  catch (error) {
    console.log(error)
  }
}

// Login Endpoint
const loginUser = async (req, res) => {
  try{
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({email:email});
    if(!user) {
      return res.json({
        error: 'No user found'
      })
    }

    // Check if passwords match
    const match = await comparePasswords(password, user.password)
    if(match) {
      return res.json(user);
    }
    if(!match){
      return res.json({
        error: 'Passwords do not match'
      })
    }
  } catch (error) { 
    console.log(error);
  }
}

const updatePicCollection  = async(req, res) => {
  const {outputArr,email} = req.body;
  console.log(email + '||' + outputArr);
  
  if(email) {

    const dbUser = await User.findOne({email: email});
    const update = dbUser.picCollection;
    update[update.length] = outputArr;
    console.log(update);
    
    if(update.length > 9){
      update.shift();
    }

    await User.findOneAndUpdate({email:email}, {picCollection: update}, {
      new: true
    })
  } else {
    res.json(null);
  }
}


const getProfile = async(req, res) => {
  console.log(req.body.email);
  const email = req.body.email;
  if(email) {
    const dbUser = await User.findOne({email: email});
    return res.json(dbUser)
  } else {
    return res.json(null);
  }
}

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  updatePicCollection
}