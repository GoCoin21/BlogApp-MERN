import React, { useContext, useEffect, useState } from "react";
import { SinglePost } from "../components";
import { Container } from "../components/singlePost/styles/style";
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../context/Context";
import axios from "axios";
import "./Css/single.css";
export default function SinglePostPage(){

	const location = useLocation()
	const path = location.pathname.split("/")[2]
	const [post,setPost] = useState({})
	const PF = "http://localhost:5000/images/"
	const {user} = useContext(Context)
	const [title,setTitle] = useState("")
	const [desc,setDesc] = useState("")
	const [updateMode,setUpdateMode] = useState(false)

	useEffect(() => {
		const getPost = async () => {
			const res = await axios.get(`/api/posts/` + path)
			setPost(res.data)
			setTitle(res.data.title)
			setDesc(res.data.desc)
		}
		getPost()
	},[path])
   
  const handleDelte = async () => {
	  try{
        await axios.delete(`/posts/${post._id}`,{
			data: {username : user.username}
		})
		window.location.replace("/")
	  }catch(err){}
  }
  const handleUpdate = async () => {
	  try{ 
         await axios.get(`/api/posts/${post._id}`,{
			 username:user.username,
			 title,
			 desc
		 })
		 setUpdateMode(true)
	  }catch(err){}
  }
	return (
		<Container>
			<SinglePost.ImageContainer>

			{post.photo && (
				<img src={PF + post.photo} alt="blog"/>
			)}
				
			
			{updateMode ? (
				<input
                  type="text"
				  value={title}
				  autoFocus
				  onChange={(e) => setTitle(e.target.value)}

				/>
			)
			:
			(
				<h1>{title}
				
				{post.username === user?.username && (
					<>
					<span onClick={() => setUpdateMode(true)}>
						<AiFillEdit/>
					</span>
					<span onClick={handleDelte}>
						<AiFillDelete/>
					</span>
					</>
					)}
				</h1>
				
			)
			}
				
				
			</SinglePost.ImageContainer>

			<SinglePost.Info>
			<h2 className="author">Author :</h2> 
			<Link className="name" to={`/?user=${post.username}`}>
			<h3 >{post.username}</h3>
			</Link>
				
				<span className="date">
					{new Date(post.createdAt).toDateString()}
				</span>
			</SinglePost.Info>
			{updateMode ? (
				<textarea
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
				/>
			) : (
                <SinglePost.Desc>
		             {desc}
					</SinglePost.Desc>
			)}
	    {updateMode && (
			<button className="singlePostButton" onClick={handleUpdate}>
				Update
			</button>
		)}		
		</Container>
	)
}