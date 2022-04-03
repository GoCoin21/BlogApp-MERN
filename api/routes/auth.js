const User = require("../models/User")
const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
// REGISTER

router.post('/register',async(req,res) => {
     const salt = await bcrypt.genSalt(10)
	try{
      const {username,email,password} = req.body

	  if(!(email && password && username)){
         res.status(401).send("All input is required")
	  }

	  const oldUser = await User.findOne({email})

	  if(oldUser){
		  return res.status(409).send("User already exist.")
	  }
	  encryptPassword = await bcrypt.hash(password,salt)

	  const user = new User({
		  username : username,
		  email : email,
		  password : encryptPassword
	  })

	  const userSignup = await user.save()

	  const payload = {
		  user : {
			  id : userSignup.id
		  }
	  }
	  jwt.sign(payload,"anystring",{expiresIn:10000},function(err,token){
		  if(err){
			  res.send(err)
		  }
		  res.status(200).json({
			  token,
			  userSignup
		  })
	  })
	}catch(err){
       res.status(400).json({'error' : err})
	}
})
router.post("/login",async(req,res) => {
	try{
       const {email,password} = req.body

	   if(!(email && password)){
		   res.status(401).send("All input is required")
	   }

	   const user = await User.findOne({email})
       const userpass = await bcrypt.compare(password,user.password)
	   if(user && userpass){
		   const token = jwt.sign(
			   {user_id : user._id,
			    email},"anystring",
				{
					expiresIn : 10000
				}
		   )
		   user.token = token
		   res.status(200).json(user)
	   }
	   res.status(400).send("Invalid Credentials")
	}catch(err){
       res.status(500).send(err)
	}
})
module.exports = router