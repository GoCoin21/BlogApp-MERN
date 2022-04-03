import React from "react";
import SidebarPage from "./SidebarPage";
import SinglePostPage from "./SinglePostPage";
import "./Css/single.css"

export default function SinglePage(){
	return (
		
		
		<div className="single">
		
			<SinglePostPage/>
			<SidebarPage/>
		</div>
		
	)
}