import React from "react";
import { Post } from "../components";
import { Container } from "../components/post/styles/style";
import { Link } from "react-router-dom";
export default function PostPage({post}){
	const PF = "http://localhost:5000/images/"
	return(
	
		<Container>
		{post.photo && <Post.Image src={PF + post.photo} alt="post"/>}
			
			
			{post.categories.map((c) => (
				<Post.ImgSubtitle>{c.name}</Post.ImgSubtitle>
			))}
			
          
			  
		 
			<Link to={`/singlepage/${post._id}`}>
			<Post.Header>{post.title}</Post.Header>
			</Link>
			<Post.PostTime>{new Date(post.createdAt).toDateString()}</Post.PostTime>
			<Post.Desc>{post.desc}</Post.Desc>
	
            	
	</Container>

	)
}