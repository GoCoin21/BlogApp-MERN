import React, { useEffect, useState } from "react";
import HeaderPage from "./HeaderPage";

import SidebarPage from "./SidebarPage";
import "./Css/home.css";
import Posts from "./Posts";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function Homepage(){
	const [posts,setPosts] = useState([])
	const {search} = useLocation()
    
	useEffect(() => {
		const blogPosts = async() => {
			const res = await axios.get("/api/posts/" + search)
			setPosts(res.data)
		}
		blogPosts()

	},[search])
		return (
		<>
		
		<HeaderPage/>
		<div className="home">
		<Posts posts={posts}/>
		<SidebarPage/>
		</div>
		</>
	)
}