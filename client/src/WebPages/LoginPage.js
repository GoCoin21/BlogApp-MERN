import React, { useEffect, useRef, useState,useContext } from "react";
import { Login } from "../components";
import { Container } from "../components/login/styles/style";
import "./Css/login.css";

import axios from "axios";
import { Context } from "../context/Context";
export default function LoginPage(){
	
	const [email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	const {dispatch,isFetching} = useContext(Context)
    
	const handleSubmit = async (e) => {
		e.preventDefault()
        dispatch({type:"LOGIN_START"})
           
		try{
            const res = await axios.post('/api/auth/login',{
				email : email,
				password : password
			 })
			 dispatch({type : "LOGIN_SUCCESS",payload:res.data})
		}catch(err){
           dispatch({type : "LOGIN_FAILURE"})
		}
          
		  
	


}
const onHandleChangeName = (e) => {
	setEmail(e.target.value)
}
const onHandleChangePass = (e) => {
	setPassword(e.target.value)
}

	return (
		 <>
		
		<Login.Register to="/registerpage">Register</Login.Register>

	    
		<Container>
	          
            
			<Login.Header>Login</Login.Header>
			<Login.Form onSubmit={handleSubmit}>
               
			   <Login.Label>Email</Login.Label>
			   <Login.Input type="email" onChange={onHandleChangeName} placeholder="Enter Username"   required/>
 
              <Login.Label>Password</Login.Label>
			  <Login.Input type="password" onChange={onHandleChangePass} placeholder="Password" required/>

			  <Login.Button type="submit"disabled={isFetching} >Login</Login.Button>
			</Login.Form>
			
			 
		</Container>
	  
		</>
	)
}

