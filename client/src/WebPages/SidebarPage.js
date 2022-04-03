import React, { useEffect, useState } from "react";
import { Sidebar } from "../components";
import { Container } from "../components/sidebar/styles/style";
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram,FaPinterest,FaTwitter} from "react-icons/fa"
import axios from "axios";

export default function SidebarPage(){
	const PF = "http://localhost:5000/images/"
	const [cats,setCats] = useState([])
    const [user,setUser] = useState("")
	useEffect(() => {
		const getCats = async() => {
			const person = await axios.get("/api/users/")
			const res = await axios.get("/categories")
			setUser(person.data)
			setCats(res.data)
		}
		getCats()
	},[])
	return (
		<Container>
			<Sidebar.SideContainer>
				<Sidebar.Header>About me</Sidebar.Header>

				<Sidebar.Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/christmas-party-themes-mini-trees-1634830391.jpg?crop=0.669xw:1.00xh;0.331xw,0&resize=480:*" alt="person"/>
				<Sidebar.Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Sidebar.Desc>
				
			
				<Sidebar.CatTitle>Categories</Sidebar.CatTitle>
				<Sidebar.Link>
		          

				  {cats.map((c) => (
					<Link to={`/?cat=${c.name}`}>
						<li>{c.name}</li>
					</Link>
				  ))}
				<li><Link to="/sport">Sport</Link></li>
					<li><Link to="/tech">Tech</Link></li>
					<li><Link to="/music">Music</Link></li>
					<li><Link to="/style">Style</Link></li>
					<li><Link to="/cinema">Cinema</Link></li>
					<li><Link to="/life">Life</Link></li>
					
					
					</Sidebar.Link>
				
				
				
				<Sidebar.FollowTitle>Follow us</Sidebar.FollowTitle>
				<Sidebar.Follow>
                     
					<Sidebar.Follow><Link to="/facebook"><FaFacebook/></Link></Sidebar.Follow> 
					 
					 <Sidebar.Follow><Link to="/instagram"><FaInstagram/></Link></Sidebar.Follow>
					 
					 <Sidebar.Follow><Link to="/pinterest"><FaPinterest/></Link></Sidebar.Follow>
					 
					 <Sidebar.Follow><Link to="/twitter"><FaTwitter/></Link></Sidebar.Follow>
				 
				</Sidebar.Follow>
				</Sidebar.SideContainer>
			</Container>
	)
}