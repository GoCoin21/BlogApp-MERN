import React from "react";
import { Container,PtImage,Subtitle,Header,BlogTime,Description } from "./styles/style";

export default function Post({children}){
	<Container >{children}</Container>
}

Post.Image = function PostImg({...restProps}){
	return <PtImage {...restProps}/>
}
Post.ImgSubtitle = function PostImgTitle({children}){
	return <Subtitle>{children}</Subtitle>
}
Post.Header = function PostHeader({children}){
	return <Header>{children}</Header>
}
Post.PostTime = function PostSubTime({children}){
	return <BlogTime>{children}</BlogTime>
}
Post.Desc = function PostDesc({children}){
	return <Description>{children}</Description>
}
