const Category = require("../models/Category")
const router = require("express").Router()
//POST CAT
router.post("/",async(req,res) => {
	const newCat = new Category(req.body)
	try{
       const savedCat = await newCat.save()
	   res.status(200).json(savedCat)
	}catch(err){
      res.status(500).send(err)
	} 
})

// GET POSTS
router.get("/",async(req,res) => {
	try{
      const cats = await Category.find()
	  res.status(200).json(cats)
	}catch(err){
     res.status(500).send(err)
	}
})

module.exports = router