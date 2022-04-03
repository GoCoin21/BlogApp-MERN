import React, { useContext, useState } from "react";
import { Write } from "../components";
import { Container } from "../components/write/styles/style";
import {AiFillPlusCircle} from "react-icons/ai";
import "./Css/write.css";
import axios from "axios";
import { Context } from "../context/Context";
export default function WritePage(){
	const [title,setTitle] = useState("")
	const [desc,setDesc] = useState("")
	const [file,setFile] = useState(null)
    const {user} = useContext(Context)
	const handleSubmit = async(e) => {
		e.preventDefault()
		const newPost = {
			username : user.username,
			title,
			desc,
		}
		if(file){
			const data = new FormData()
			const filename = Date.now() + file.name;
			data.append("name",filename)
			data.append("file",file)
			newPost.photo = filename;
			try{
				await axios.post("/api/upload",data)
			}catch(err){
				
			}
			try{
               const res = await axios.post("/api/posts",newPost)
			   window.location.replace("/post/" + res.data._id)
			}catch(err){
               
			}
		}
	}
	
	return(
		<>
		
	<Container>
	`
        {file && (
			<Write.Image src={URL.createObjectURL(file)} alt="blog"/>
		)}
		
        <Write.Form onSubmit={handleSubmit}>
			<Write.Label>
              <AiFillPlusCircle/>
			  <Write.Input type="file" onChange={(e) => setFile(e.target.files[0])}/>

			</Write.Label>
			<Write.Title type="text" placeholder="Title" autoFocus={true} onChange={(e) => setTitle(e.target.value)}/>
			<Write.Text  placeholder="Tell your story..." type="text" autoFocus={true} onChange={(e) => setDesc(e.target.value)}/>

			<Write.Button type="submit"  >Publish</Write.Button>

		</Write.Form>
	</Container>
	</>
	)
}