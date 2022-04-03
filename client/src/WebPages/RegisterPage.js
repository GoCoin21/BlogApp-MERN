import axios from "axios";
import React, { useState } from "react";
import { Register } from "../components";
import { Container } from "../components/register/styles/style";
import "./Css/login.css";
export default function RegisterPage(){
    const [username,setUsername] = useState("")
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const [error,setError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
        setError(false)
		try{
			const res = await axios.post('/api/auth/register',{
				username : username,
				email : email,
				password : password
			})
			res.data && window.location.replace("/loginpage")
		}catch(err){
			setError(err)
		}
	}

	const onHandleChangeName = (e) => {
		setUsername(e.target.value)
	}
	const onHandleChangeEmail = (e) => {
		setEmail(e.target.value)
	}
	const onHandleChangePassword = (e) => {
		setPassword(e.target.value)
	}

	return (
		 <>
		<Register.Login to="/loginpage">Login</Register.Login>

	
		<Container>
	          
             
			<Register.Header>Register</Register.Header>
			<Register.Form  type="submit" onSubmit={handleSubmit}>
               
			   <Register.Label>Username</Register.Label>
			   <Register.Input type="text" placeholder="Enter Username" required onChange={onHandleChangeName}/>
                
				<Register.Label>Email</Register.Label>
				<Register.Input type="email" placeholder="Enter Email" required onChange={onHandleChangeEmail}/>

              <Register.Label>Password</Register.Label>
			  <Register.Input type="password" placeholder="Password" required onChange={onHandleChangePassword}/>

			  <Register.Button type="submit">Register</Register.Button>
			</Register.Form>
			{error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}

		</Container>
		</>
	)
}