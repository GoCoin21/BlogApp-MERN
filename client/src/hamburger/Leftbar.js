import React, { useContext, useState } from "react";
import styled from "styled-components";
import "./left.css";
import { Context } from "../context/Context";
const UI = styled.ul`
list-style : none;
display : flex;
flex-flow : row nowrap;
text-transform : uppercase;
  li{
	padding : 18px 10px;
	cursor : pointer;
	a{
		color : #000;
		text-decoration:none;
	}
}
@media only screen and  (max-width : 768px){
	flex-flow : column nowrap;
	background-color : #0D2538;
	position : fixed;
	transform : ${({open}) => open ? "translateX(0)" : "translateX(100%)"};
	top : 0;
	right:0;
	
	height : 100vh;
	width: 300px;
	padding : 3.5rem;
	transition : transform 0.3s ease-in-out;

	 li{
		color : #fff;
	 a{
		 color: #fff;
	 }
	}
}

`

const Leftbar = ({open}) => {
	
	const {user,dispatch} = useContext(Context);

	const handleLogout = () => {
		dispatch({type : "LOGOUT"})
	}
	return (
		<UI open={open} >
           <li><a href="/">HOME</a></li> 
		   <li><a href="/about">ABOUT</a></li>
		   <li><a href="/contact">Contact</a></li>
		   <li><a href="/writepage">Write</a></li>
		   <li ><a href="/loginpage" className="special">Login</a></li>
		   <li ><a href="/registerpage" className="special">Register</a></li>

		   {user &&
			<li onClick={handleLogout}>
			   {user && "LOGOUT"}
		   </li>
		   }
            
		   
		</UI>
	)
}
export default Leftbar;