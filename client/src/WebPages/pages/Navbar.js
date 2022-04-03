import React from "react";
import { TopHeader } from "../../components";
import {FaFacebook,FaInstagram,FaPinterest,FaTwitter} from "react-icons/fa"

export default function Navbar(){

	return (
		{"something" ?
		<Navbar/> : (
		<>
		<TopHeader.SocialContent>
			
		<TopHeader.Social to="/facebook"><FaFacebook/></TopHeader.Social>
		<TopHeader.Social to="/instagram"><FaInstagram/></TopHeader.Social>
		<TopHeader.Social to="/pinterest"><FaPinterest/></TopHeader.Social>
		<TopHeader.Social to="/twitter"><FaTwitter/></TopHeader.Social>
		
	</TopHeader.SocialContent>
	
  <TopHeader.Links>
	 
	  <TopHeader.Comp to="/home">HOME</TopHeader.Comp>
	  <TopHeader.Comp to="/about">ABOUT</TopHeader.Comp>
	  <TopHeader.Comp to="/contact">CONTACT</TopHeader.Comp>
	  <TopHeader.Comp to="/write">WRITE</TopHeader.Comp>
	 
	  <TopHeader.Comp to="/loginpage">LOGIN</TopHeader.Comp>
	  
  </TopHeader.Links>
	
  </>
  )
		)
}
