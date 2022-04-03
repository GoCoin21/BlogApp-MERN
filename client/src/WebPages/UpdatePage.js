import React from "react";
import SettingPage from "./SettingPage";
import SidebarPage from "./SidebarPage";
import "./Css/update.css"

export default function UpdatePage(){
	return(
		<>
		
		<div className="update">
			<SettingPage/>
			<SidebarPage/>
		</div>

		</>
	)
}