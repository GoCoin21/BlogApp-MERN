import React, { useContext } from "react";
import Homepage from "./WebPages/Homepage";

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./app.css";
import LoginPage from "./WebPages/LoginPage";
import RegisterPage from "./WebPages/RegisterPage";
import SinglePage from "./WebPages/SinglePage";
import WritePage from "./WebPages/WritePage";
import UpdatePage from "./WebPages/UpdatePage";
import TopHeaderPage from "./WebPages/TopHeaderPage";
import { Context } from "./context/Context";
export default function App(){
	const {user} = useContext(Context)
	return (
	
		<Router>
          
			<TopHeaderPage/>
			<Routes>
			<Route exact path="/" element={<Homepage/>}></Route>
			<Route exact path="/loginpage" element={user ? <Homepage/> : <LoginPage/>}/>
			<Route exact path="/registerpage" element={user ? <Homepage/> : <RegisterPage/>}/>
			<Route exact path="/singlepage/:postId" element={<SinglePage/>}/>
			<Route exact path="/writepage" element={user ? <WritePage/> : <RegisterPage/>}/>
			<Route exact path = "/settingpage" element={user ? <UpdatePage/> : <RegisterPage/>}/>
			</Routes>
			</Router>
	
	)
}