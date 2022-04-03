import React, { useContext, useEffect, useState } from "react";
import { TopHeader } from "../components";
import { Container } from "../components/topbar/styles/style";
import {FaFacebook,FaInstagram,FaPinterest,FaTwitter,FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom";
import "./Css/topheader.css";
import { Context } from "../context/Context";
import { Burger } from "../hamburger";
export default function TopHeaderPage(){
	const {user,dispatch} = useContext(Context)
	const PF = "http://localhost:5000/images/"
  

	

	return (
		
		<Container>
	      
			<TopHeader.SocialContent>
			
				<TopHeader.Social to="/facebook"><FaFacebook/></TopHeader.Social>
				<TopHeader.Social to="/instagram"><FaInstagram/></TopHeader.Social>
				<TopHeader.Social to="/pinterest"><FaPinterest/></TopHeader.Social>
				<TopHeader.Social to="/twitter"><FaTwitter/></TopHeader.Social>
				
			</TopHeader.SocialContent>
 		
               <Burger/>         
			  
			
			<TopHeader.Content>
			{user  ? (
                <Link className="link" to="/settingpage">
				<h4 style={{display: "inline-block"}}>Update</h4>
			</Link>
			) : (
				<ul className="topList">
            <li className="topListItem">
              <Link style={{textDecoration:"none"}} to="/loginpage">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link style={{textDecoration:"none"}} to="/registerpage">
                REGISTER
              </Link>
            </li>
          </ul>
			)}
			
				<TopHeader.HeadSearch><FaSearch/></TopHeader.HeadSearch>
			</TopHeader.Content>
		
		</Container>
		

	)
}