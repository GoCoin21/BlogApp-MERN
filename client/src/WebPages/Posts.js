import React from "react";
import "../components/posts/postsStyle.css";
import PostPage from "./PostPage";
import "../components/posts/postsStyle.css";
import "./Css/post.css";
export default function Posts({posts}){
	
	return (
		

		
	     <div className="post-container">
        {posts.map((p) => (
			<PostPage post={p} key={p._id}/>
		))}
     </div>
)
}