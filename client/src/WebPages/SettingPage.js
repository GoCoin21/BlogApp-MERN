import React, { useContext, useState } from "react";
import { Setting } from "../components";
import { Container } from "../components/settings/styles/style";
import "./Css/setting.css";
import {CgProfile} from "react-icons/cg";

import axios from "axios";
import {Context} from "../context/Context";
export default function SettingPage(){
    const [file,setFile] = useState(null)
	const [username,setUsername] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [success,setSuccess] = useState(false)
    const {user,dispatch} = useContext(Context)
	const PF = "http://localhost:5000/api/images/"
	const onHandleChangeName = (e) => {
		setUsername(e.target.value)
	}
	const onHandleChangeEmail = (e) => {
		setEmail(e.target.value)
	}
	const onHandleChangePassword = (e) => {
		setPassword(e.target.value)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		dispatch({type:"UPDATE_START"})

		const updateUser = {
			userId : user._id,
			username,
			email,
			password

		}

		if(file){
			const data = new FormData()
			const filename = Date.now() + file.name;
			data.append("name",filename)
			data.append("file",file)
			updateUser.profilePic = filename;

			try{
               await axios.post('/upload',data)

			}catch(err){
                 
			}
            
		}
		try{
          const res = await axios.put('/api/users' + user._id,updateUser)
		  setSuccess(true)
		  dispatch({type : "UPDATE_SUCCESS",payload : res.data})
		}catch(err){
          dispatch({type : "UPDATE_FAILURE"})
		}
	}
	return (
		
	
		<Container>
		<div className="top">
			<Setting.Header>update your account</Setting.Header>
            <Setting.SubHeader>delete account</Setting.SubHeader>
			</div>
            <div className="profile" onSubmit={handleSubmit}>
               <Setting.Label>Profile Picture</Setting.Label>
			   <Setting.Image src={file ? URL.createObjectURL(file) : PF+user.profilePic} alt="profilepic"/>
			   <Setting.Label>
                <CgProfile/>
				<Setting.Input type="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
			   </Setting.Label>
			   

			   <Setting.Label>username</Setting.Label>
			   <Setting.Input autoFocus={true} type="text" placeholder={user.username} required onChange={onHandleChangeName}/>
			
			   <Setting.Label>email</Setting.Label>
			   <Setting.Input type="email" autoFocus={true} placeholder={user.email} required onChange={onHandleChangeEmail}/>

			   <Setting.Label>password</Setting.Label>
			   <Setting.Input type="password" autoFocus={true}  required onChange={onHandleChangePassword}/>
               <Setting.Button type="submit">Update</Setting.Button>

			   {success && (
			   <span
			   style={{color : "green",textALign:"center",marginTop:"10px"}}
			   >
			    Profile has been updated.....
			   </span>
			   )}
			</div>

				
		</Container>
		
		
	)
}