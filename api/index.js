const express = require('express')
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")
const postRoute = require("./routes/post")
const categoryRoute = require("./routes/categories")
const multer = require('multer')
const path = require('path')

dotenv.config()

mongoose.connect(process.env.MONGO_URL,{
	useNewUrlParser:true,
	useUnifiedTopology: true
})
.then(console.log("Connected to Database"))
.catch((err) => console.log(err))



const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const port =  5000;
app.use(express.json())
app.use("/images",express.static(path.join(__dirname, "/images")))


const storage = multer.diskStorage({
	destination : (req,file,cb) => {
		cb(null,"images")
	},
	filename : (req,file,cb) => {
		cb(null,req.body.name)
	}
})
const upload = multer({storage : storage})

app.post("/api/upload",upload.single("file"), (req,res) => {
	res.status(200).json("File has been uploaded")
})

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/categories",categoryRoute)


app.listen(port,() => {
   console.log(`The server is running on port ${port}`);
})